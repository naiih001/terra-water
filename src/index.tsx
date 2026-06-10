import { LocationProvider, Router, hydrate, prerender as ssr } from 'preact-iso';
import { NavBar } from './components/NavBar.jsx';
import { Home } from './pages/Home/index.jsx';
import { Shop } from './pages/Shop/index.jsx';
import { Product } from './pages/Product/index.jsx';
import { Cart } from './pages/Cart/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
  return (
    <LocationProvider>
      <NavBar />
      <main style="padding-top: 72px">
        <Router>
          <Home path="/" />
          <Shop path="/shop" />
          <Product path="/shop/:slug" />
          <Cart path="/cart" />
          <NotFound default />
        </Router>
      </main>
    </LocationProvider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
