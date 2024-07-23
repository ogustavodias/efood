// Styles
import GlobalStyles from "./GlobalStyles";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// React-router-dom
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
