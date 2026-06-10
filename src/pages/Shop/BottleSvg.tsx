import { getProductImage } from '../../data/images.js'

interface BottleSvgProps {
  slug?: string
}

export function BottleSvg({ slug }: BottleSvgProps) {
  const src = slug ? getProductImage(slug) : '/images/350ml.png'
  return (
    <img
      src={src}
      alt="Terra spring water bottle"
      class="product-img"
      loading="lazy"
    />
  )
}
