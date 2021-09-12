export function encodeSlug(text: string) {
  return text.replace(' ', '-').toLowerCase()
}

export function decodeSlug(text: string) {
  return text.replace('-', ' ').replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase())
}
