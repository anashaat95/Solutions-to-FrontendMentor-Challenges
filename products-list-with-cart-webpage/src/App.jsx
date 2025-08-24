import "./App.css";
import Cart from "./features/Cart/Cart";
import ProductsList from "./features/Products-List/ProductsList";

function App() {
  return (
    <main className="container">
      <ProductsList />
      <Cart />
    </main>
  );
}

export default App;
