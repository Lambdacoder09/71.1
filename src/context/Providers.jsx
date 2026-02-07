import { AuthProvider } from "./AuthContext";
import { CartProvider } from "../assets/components/Cart/CartContext";
// later you can add more providers here
// import { ThemeProvider } from "./ThemeContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default Providers;
