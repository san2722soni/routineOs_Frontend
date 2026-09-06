import Image from 'next/image';
export function Phone({ src, alt, priority = false, className = '' }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return <div className={`phone ${className}`}><Image src={`/images/${src}`} alt={alt} width={720} height={1600} sizes="(max-width: 700px) 72vw, 320px" priority={priority}/></div>;
}
