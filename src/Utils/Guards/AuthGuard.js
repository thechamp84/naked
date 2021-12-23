import useAuth from 'Hooks/UseAuth';
import { Redirect } from 'react-router-dom';
import { LocalStorage } from 'Utils/LocalStorage';
const storage = new LocalStorage();

export default function AuthGuard(next) {
    const { user } = useAuth();
    const userToken = storage.get('userToken');

    if (userToken) {
        return next();
    }

    return <Redirect to="/sign-in" />;
}
