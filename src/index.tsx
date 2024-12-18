import ReactDOM from 'react-dom/client';
import App from "./App";
import"../src/assets/css/style.css"
import store from "./redux/store";
import { Provider } from 'react-redux'

const root:any= ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <>
  <Provider store={store}>
      <App />
    </Provider>
  </>
);


