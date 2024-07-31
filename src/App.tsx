// Styles
import GlobalStyles from "./GlobalStyles";

// Components
import Footer from "./components/Footer";

// React-router-dom
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

// Redux
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import Modal from "./components/Modal";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
        <Footer />
        <Modal />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
