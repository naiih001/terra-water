import { useInView } from '../hooks/useInView.js';
import './Story.css';

export function Story() {
  const [ref, inView] = useInView();

  return (
    <section id="story" class="section-wrap story-wrap" ref={ref} data-visible={inView}>
      <div class="section-content">
        <div class="story-grid">
          <div class="story-visual-wrap">
            <img src="/images/mountains.jpg" alt="Mountain landscape" class="story-mountain-img" />
          </div>
          <div class="story-text">
            <h2>From the mountain<br />to you</h2>
            <p>
              Hidden deep within ancient granite mountains, our spring has been
              quietly filtering water for over a thousand years. Each drop passes
              through mineral-rich rock, emerging pure and perfectly balanced.
            </p>
            <p>
              We bottle nothing but the water itself &mdash; no treatment, no
              additives. Just the pure essence of the mountain, captured at the
              source and sealed in glass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
