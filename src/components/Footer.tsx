import './Footer.css';

export function Footer() {
  return (
    <footer id="footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">TERRA</div>
          <p>Natural spring water, bottled at the source. Nothing added. Nothing taken away.</p>
        </div>
        <div class="footer-col">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/#discover">Discover</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Follow us</h4>
          <p class="footer-social">Instagram &middot; Twitter</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Terra. All rights reserved.</p>
      </div>
    </footer>
  );
}
