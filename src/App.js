import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './component/CakeContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer/>

      </div>

    </Provider>
  );
}

export default App;
