"""Build the illustrated screen-by-screen guide: npm run guide."""
import json
import shutil
from pathlib import Path
from xml.sax.saxutils import escape
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
OUT = PUBLIC / 'assets/guide/routineos-quick-guide.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)
pages = json.loads((ROOT / 'content/guide.json').read_text(encoding='utf-8'))
regular, bold = 'Helvetica', 'Helvetica-Bold'
fonts = Path('C:/Windows/Fonts')
if (fonts / 'segoeui.ttf').exists():
    pdfmetrics.registerFont(TTFont('Guide', str(fonts / 'segoeui.ttf')))
    pdfmetrics.registerFont(TTFont('GuideBold', str(fonts / 'segoeuib.ttf')))
    regular, bold = 'Guide', 'GuideBold'

pdf = canvas.Canvas(str(OUT), pagesize=(1000, 760))
pdf.setTitle('RoutineOS - Your illustrated quick start')
pdf.setAuthor('RoutineOS')
pdf.setSubject('Areas, routines, videos, planning, Today, location reminders and backup')

def text(value, x, top, width, size=12, color='#B4BFCD', strong=False):
    p = Paragraph(escape(value), ParagraphStyle('copy', fontName=bold if strong else regular,
                  fontSize=size, leading=size*1.4, textColor=HexColor(color)))
    _, height = p.wrap(width, 760)
    p.drawOn(pdf, x, top-height)
    return top-height

def box(x, y, width, height, fill='#191F27', radius=12):
    pdf.setFillColor(HexColor(fill))
    pdf.roundRect(x, y, width, height, radius, fill=1, stroke=0)

def shot(spec, x):
    preferred, fallback, caption = spec
    source = PUBLIC / 'assets' / preferred
    if not source.exists() and fallback:
        source = PUBLIC / 'images' / fallback
    if not source.exists():
        raise FileNotFoundError(f'Guide screenshot missing: {preferred}')
    w, h, bottom = 203, 451, 108
    box(x-5, bottom-5, w+10, h+10, '#252E39', 19)
    with Image.open(source) as im:
        iw, ih = im.size
    scale = min(w/iw, h/ih)
    pdf.drawImage(str(source), x+(w-iw*scale)/2, bottom+(h-ih*scale)/2,
                  iw*scale, ih*scale, mask='auto')
    text(caption, x, 88, w, 10, '#B4BFCD')

for i, page in enumerate(pages, 1):
    pdf.setFillColor(HexColor('#0F1216')); pdf.rect(0, 0, 1000, 760, fill=1, stroke=0)
    text('routineOS', 36, 732, 240, 17, '#FFE2B8', True)
    text('YOUR ILLUSTRATED QUICK START', 698, 727, 265, 9, '#8D9AAA')
    pdf.setStrokeColor(HexColor('#29313C')); pdf.line(36, 696, 964, 696)
    text(f'{i:02d} / {page["section"]}', 36, 682, 920, 10, '#38BDF8', True)
    text(page['title'], 36, 658, 930, 29, '#F4F6F8', True)
    intro_bottom = text(page['intro'], 36, 612, 920, 12)
    assert intro_bottom > 570, f'Intro too long: {page["section"]}'
    pdf.bookmarkPage(str(i)); pdf.addOutlineEntry(page['section'], str(i))
    for j, spec in enumerate(page['shots']):
        shot(spec, 42+j*231)
    if page.get('diagram'):
        text('THE SIMPLE IDEA', 282, 548, 200, 10, '#38BDF8', True)
        for n, item in enumerate(page['diagram']):
            top = 508-n*93
            box(274, top-65, 200, 65)
            label, example = item.split(' / ')
            text(label, 288, top-11, 172, 9, '#38BDF8', True)
            text(example, 288, top-30, 172, 13, '#FFE2B8', True)
            if n < 3:
                pdf.setStrokeColor(HexColor('#3C4D5D')); pdf.line(374, top-66, 374, top-87)
    x, width = 520, 443
    text('WHY THIS SCREEN EXISTS', x, 563, width, 9, '#38BDF8', True)
    top = text(page['why'], x, 542, width, 12, '#D2DBE5')-23
    for n, (title, body) in enumerate(page['steps'], 1):
        box(x, top-23, 25, 25, '#263543', 7)
        text(str(n), x+8, top-3, 17, 11, '#FFE2B8', True)
        text(title, x+39, top, width-39, 14, '#F4F6F8', True)
        top = text(body, x+39, top-24, width-39, 11.5)-19
    assert top > 220, f'Steps overflow example: {page["section"]} at {top}'
    box(x, 105, width, 108, '#1B252C')
    text('TRY THIS / A REAL EXAMPLE', x+17, 198, width-34, 9, '#FFE2B8', True)
    example_bottom = text(page['example'], x+17, 177, width-34, 11.5, '#E2E9F0')
    assert example_bottom > 112, f'Example overflow: {page["section"]}'
    next_bottom = text(page['next'], x, 86, width, 10, '#9AABB9')
    assert next_bottom > 43, f'Footer overflow: {page["section"]}'
    pdf.setStrokeColor(HexColor('#29313C')); pdf.line(36, 40, 964, 40)
    text('STOP REPLANNING. START EXECUTING.', 36, 28, 500, 8, '#FFE2B8')
    text(f'{i:02d} / {len(pages):02d}', 915, 28, 50, 9, '#B4BFCD')
    pdf.showPage()
pdf.save()
archive = ROOT / 'output/pdf'
archive.mkdir(parents=True, exist_ok=True)
shutil.copy2(OUT, archive / OUT.name)
print(f'Created {len(pages)} pages with {sum(len(p["shots"]) for p in pages)} screenshots: {OUT}')
