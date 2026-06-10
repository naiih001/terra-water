export function getProductImage(slug: string): string {
  const map: Record<string, string> = {
    '330ml': '/images/350ml.png',
    '750ml': '/images/750ml.png',
    '15l': '/images/1.5L.png',
    'case-330': '/images/case of 330ml.png',
    'case-mixed': '/images/1.5 and 750ml mixed case.png',
  }
  return map[slug] || '/images/350ml.png'
}

export const HERO_IMAGE = '/images/Gemini_Generated_Image_2uj02uj02uj02uj0.png'
