import classes from './Auth.module.css';
import { authActions } from '../store';
import { useDispatch,useSelector } from 'react-redux';
import UserProfile from './UserProfile';
const Auth = () => {
  const auth=useSelector(state=>state.auth.isAuthenticated);
  const dispatch=useDispatch();
  const loginhandler = () => {
    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={(event)=> {event.preventDefault();loginhandler();}}>Login</button>
        </form>
        {auth && <UserProfile/>}
      </section>
    </main>
  );
};

export default Auth;
