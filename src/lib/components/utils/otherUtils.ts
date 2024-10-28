export function styleObjectToString(styleObj?: Record<string, string>) {
  if (!styleObj) return '';
  return Object.entries(styleObj)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ');
}

export function tryParse(value?: string) {
  try {
    return JSON.parse(value)
  } catch (e) {
    console.error(e)
    return {}
  }
}