import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./Routes";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

import Footer from "./components/Footer";
import Modal from "./components/Modal";

import GlobalStyles from "./GlobalStyles";

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
