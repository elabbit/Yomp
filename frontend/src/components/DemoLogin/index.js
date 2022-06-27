
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

const DemoLogin = () => {
    const dispatch = useDispatch();
    const credential = 'demo@email.com';
    const password = 'password'
    dispatch(sessionActions.login({ credential, password }))
    return <Redirect to="/" />
}


export default DemoLogin;
