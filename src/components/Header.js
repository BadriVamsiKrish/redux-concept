import classes from './Header.module.css';
import { authActions } from '../store';
import { useDispatch } from 'react-redux';


const Header = () => {
  //const auth =useSelector(state=>state.auth.isAuthenticated);
  const dispatch=useDispatch();
  const logouthandler = () => {
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={(event)=>{logouthandler();}}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
