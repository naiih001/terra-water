import './QuantityPicker.css'

interface QuantityPickerProps {
  value: number
  onChange: (val: number) => void
  min?: number
}

export function QuantityPicker({ value, onChange, min = 1 }: QuantityPickerProps) {
  return (
    <div class="qty-picker">
      <button
        class="qty-btn"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <svg width="14" height="2" viewBox="0 0 14 2" fill="none">
          <path d="M0 1h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <span class="qty-value">{value}</span>
      <button
        class="qty-btn"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
