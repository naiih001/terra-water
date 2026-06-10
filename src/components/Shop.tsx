import { useInView } from '../hooks/useInView.js';
import './Shop.css';

const products = [
  { size: '330\u2009ml', price: '$1.80', img: '/images/350ml.png' },
  { size: '750\u2009ml', price: '$2.40', img: '/images/750ml.png' },
  { size: '1.5\u2009L', price: '$3.20', img: '/images/1.5L.png' },
];

export function Shop() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="shop" class="section-wrap shop-wrap" ref={ref} data-visible={inView}>
      <div class="section-content">
        <div class="section-header">
          <h2>Our products</h2>
          <p>From the source to your table. Choose your size.</p>
        </div>
        <div class="products-grid">
          {products.map((p, i) => (
            <div class="product-card" key={i}>
              <div class="product-visual">
                <img src={p.img} alt={`Terra ${p.size}`} class="product-img" loading="lazy" />
              </div>
              <h3>{p.size}</h3>
              <p class="product-price">{p.price}</p>
              <button class="btn btn-primary">Shop now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
