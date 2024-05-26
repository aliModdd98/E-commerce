import { Provider } from "react-redux";
import { store } from "./store";
import LandingPage from "./modules/LandingPage/LandingPage";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        closeButton
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <LandingPage />
    </Provider>
  );
}

export default App;
