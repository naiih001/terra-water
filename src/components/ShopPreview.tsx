import { useInView } from '../hooks/useInView.js';
import { products } from '../data/products.js';
import { getProductImage } from '../data/images.js';
import './Shop.css';

const previewProducts = products.filter((p) => !p.slug.startsWith('case')).slice(0, 3);

export function ShopPreview() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="shop" class="section-wrap shop-wrap" ref={ref} data-visible={inView}>
      <div class="section-content">
        <div class="section-header">
          <h2>Our products</h2>
          <p>From the source to your table. Choose your size.</p>
        </div>
        <div class="products-grid">
          {previewProducts.map((product, i) => (
            <a
              key={product.slug}
              href={`/shop/${product.slug}`}
              class="product-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div class="product-visual">
                <img src={getProductImage(product.slug)} alt={product.name} class="product-img" loading="lazy" />
              </div>
              <h3>{product.name}</h3>
              <p class="product-price">${product.price.toFixed(2)}</p>
            </a>
          ))}
        </div>
        <div class="shop-preview-cta">
          <a href="/shop" class="btn btn-secondary">View all products</a>
        </div>
      </div>
    </section>
  );
}
