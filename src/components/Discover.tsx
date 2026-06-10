import { useInView } from '../hooks/useInView.js';
import './Discover.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6 Q12 16 12 28 Q12 38 24 40 Q36 38 36 28 Q36 16 24 6Z"
              fill="var(--forest)" opacity="0.1" />
        <path d="M24 6 Q12 16 12 28 Q12 38 24 40 Q36 38 36 28 Q36 16 24 6Z"
              stroke="var(--forest)" strokeWidth="1.2" opacity="0.3" />
        <path d="M24 14 L24 36" stroke="var(--forest)" strokeWidth="1" opacity="0.2" />
        <path d="M24 18 Q20 22 18 28"
              stroke="var(--forest)" strokeWidth="0.8" fill="none" opacity="0.2" />
        <path d="M24 22 Q28 26 30 32"
              stroke="var(--forest)" strokeWidth="0.8" fill="none" opacity="0.2" />
      </svg>
    ),
    title: '100% Natural',
    desc: 'Nothing added. Nothing taken away. Pure spring water, untouched.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6 Q14 22 14 32 Q14 40 24 42 Q34 40 34 32 Q34 22 24 6Z"
              fill="var(--water)" opacity="0.15" />
        <path d="M24 6 Q14 22 14 32 Q14 40 24 42 Q34 40 34 32 Q34 22 24 6Z"
              stroke="var(--water)" strokeWidth="1.2" opacity="0.35" />
        <path d="M20 24 Q22 28 24 30"
              stroke="white" strokeWidth="1.5" strokeLinecap="round"
              fill="none" opacity="0.3" />
      </svg>
    ),
    title: 'Rich in Minerals',
    desc: 'A balanced mineral profile that gives Terra its crisp, clean taste.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" fill="var(--sage)" opacity="0.1" />
        <circle cx="24" cy="24" r="16" stroke="var(--sage)" strokeWidth="1.2" opacity="0.3" />
        <text x="24" y="29" textAnchor="middle" fontFamily="'Inter', sans-serif"
              fontSize="12" fontWeight="500" fill="var(--sage)">pH</text>
      </svg>
    ),
    title: 'pH Balanced',
    desc: 'Naturally pH balanced at 7.4 &mdash; the same as your body.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8 Q12 14 12 28 Q12 40 24 42"
              stroke="var(--forest)" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M24 42 Q36 36 36 22 Q36 10 24 8"
              stroke="var(--forest)" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M16 28 L12 32 L8 28"
              stroke="var(--forest)" strokeWidth="1.2" fill="none"
              strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
        <path d="M32 20 L36 16 L40 20"
              stroke="var(--forest)" strokeWidth="1.2" fill="none"
              strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
        <path d="M20 30 L24 34 L28 28 L26 20"
              stroke="var(--sage)" strokeWidth="1.2" fill="none"
              strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      </svg>
    ),
    title: 'Sustainably Sourced',
    desc: 'Our facility runs on renewable energy. Every bottle is 100% recyclable.',
  },
];

export function Discover() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="discover" class="section-wrap" ref={ref} data-visible={inView}>
      <div class="section-content">
        <div class="section-header">
          <h2>Nature&rsquo;s design</h2>
          <p>Every detail of Terra is shaped by the environment it comes from.</p>
        </div>
        <div class="features-grid">
          {features.map((f, i) => (
            <div class="feature-card" key={i}>
              <div class="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
