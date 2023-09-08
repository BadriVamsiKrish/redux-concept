import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { Fragment } from 'react';
import { authActions } from './store';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import UserProfile from './components/UserProfile';
function App() {
  const auth=useSelector(state=>state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header/>
      {auth?<UserProfile/>:<Auth/>}
      <Counter />
    </Fragment>
  );
}

export default App;
