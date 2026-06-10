import { useInView } from '../hooks/useInView.js';
import './Story.css';

export function Story() {
  const [ref, inView] = useInView();

  return (
    <section id="story" class="section-wrap story-wrap" ref={ref} data-visible={inView}>
      <div class="section-content">
        <div class="story-grid">
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
          <div class="story-visual-wrap">
            <svg viewBox="0 0 380 460" fill="none">
              <path d="M0 320 L80 180 L160 260 L240 140 L320 240 L380 190 L380 460 L0 460Z"
                    fill="var(--forest)" opacity="0.06" />
              <path d="M0 350 L100 240 L180 310 L260 210 L340 290 L380 260 L380 460 L0 460Z"
                    fill="var(--sage)" opacity="0.10" />
              <ellipse cx="190" cy="370" rx="120" ry="28" fill="var(--water)" opacity="0.12" />
              <ellipse cx="190" cy="370" rx="70" ry="16" fill="var(--water)" opacity="0.08" />
              <path d="M155 365 Q165 360 175 365 Q185 370 195 365"
                    stroke="var(--water)" strokeWidth="1.2" strokeLinecap="round"
                    fill="none" opacity="0.25" />
              <path d="M195 375 Q205 370 215 375 Q225 380 235 375"
                    stroke="var(--water)" strokeWidth="1.2" strokeLinecap="round"
                    fill="none" opacity="0.20" />
              <circle cx="240" cy="210" r="3" fill="var(--water)" opacity="0.3" />
              <path d="M240 213 Q238 230 240 250 Q242 260 240 270"
                    stroke="var(--water)" strokeWidth="1" fill="none" opacity="0.2" />
              <path d="M50 280 L60 240 L70 280Z" fill="var(--forest)" opacity="0.12" />
              <path d="M65 290 L75 255 L85 290Z" fill="var(--forest)" opacity="0.08" />
              <path d="M310 260 L320 220 L330 260Z" fill="var(--forest)" opacity="0.12" />
              <path d="M325 275 L335 240 L345 275Z" fill="var(--forest)" opacity="0.08" />
              <path d="M0 400 Q95 385 190 395 Q285 405 380 390 L380 460 L0 460Z"
                    fill="var(--sand)" opacity="0.08" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
