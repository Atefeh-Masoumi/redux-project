import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './component/CakeContainer';
import CakeWithPayload from './component/cakeWithPayload';
import HookCakeContainer from './component/HookCakeContainer';
import HookIcecreamContainer from './component/IcecreamContainer';
import UserConntainer from './component/UserContainer';
import store from './redux/store';
import PostSaga from './component/postSaga/postSaga'
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer/>
        <HookCakeContainer/>
        <HookIcecreamContainer/>
        <CakeWithPayload/>
        <UserConntainer/>
        <PostSaga/>

      </div>

    </Provider>
  );
}

export default App;
