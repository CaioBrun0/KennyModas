import AppRoutes from "./AppRoutes";
import {CartProvider} from "./Context/CartContext";
import "./App.css"; 

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </div>
  );
}

export default App;