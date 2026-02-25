export function scrollToSection(id: string, offset = 0) {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const absoluteTop = window.scrollY + rect.top;
  // center the element vertically in the viewport, then apply optional offset
  const target = absoluteTop - (window.innerHeight - rect.height) / 2 + offset;
  window.scrollTo({ top: Math.max(0, Math.round(target)), behavior: 'smooth' });
}
