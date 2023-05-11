import { useSelector } from 'react-redux';
import { RootState } from 'main/store';

export default function useUserData() {
    const user = useSelector((state: RootState) => state.users);

    const isLoggedIn = user.role !== null;

    return { ...user, isLoggedIn };
}
