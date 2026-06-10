import './Hero.css';

export function Hero() {
  return (
    <section class="hero">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>

      <div class="hero-grid">
        <div class="hero-text">
          <div class="badge">&#10022; Natural Spring Water</div>
          <h1>
            Terra
            <span>from the source</span>
          </h1>
          <p>
            Born from ancient mountain springs and bottled at the source.
            Nothing added. Nothing taken away.
          </p>
          <div class="hero-cta">
            <a href="#discover" class="btn btn-primary">Discover the source</a>
            <a href="/shop" class="btn btn-secondary">Shop now</a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="bottle-shadow"></div>

          <div class="bottle-wrap">
            <img src="/images/Gemini_Generated_Image_2uj02uj02uj02uj0.png" alt="Terra spring water bottle" class="hero-bottle-img" />
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        Scroll
        <div class="scroll-line"></div>
      </div>
    </section>
  );
}
