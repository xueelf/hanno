// https://developer.mozilla.org/en-US/docs/Glossary/Void_element
const voidElements: string[] = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

export function isVoidElement(tag: string): boolean {
  return voidElements.includes(tag);
}

// https://developer.mozilla.org/en-US/docs/Glossary/Character_reference
const reference = {
  '&': 'amp',
  '<': 'lt',
  '>': 'gt',
  '"': 'quot',
  "'": 'apos',
};
type Char = keyof typeof reference;

export function escape(html: unknown): string {
  return String(html).replace(/[&<>"']/g, char => `&${reference[<Char>char]};`);
}

export function camelToKebab(value: string): string {
  return value.replace(/([A-Z])/g, '-$1').toLowerCase();
}
