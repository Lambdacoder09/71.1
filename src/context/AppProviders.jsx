import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
// later you can add more providers here
// import { ThemeProvider } from "./ThemeContext";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default AppProviders;
