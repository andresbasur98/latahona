type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" /></svg>;
}

export function ArrowRight({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h14M12 5l5 5-5 5" /></svg>;
}

export function MenuMark({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h16" /></svg>;
}
