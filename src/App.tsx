// Styles
import GlobalStyles from "./GlobalStyles";

// Components
import Footer from "./components/Footer";

// React-router-dom
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
