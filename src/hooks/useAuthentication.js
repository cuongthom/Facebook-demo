import { addItemToLocalStorage, removeItemFromLocalStorage } from '../util';
import { PROFILE_STORAGE_KEY } from '../constants';
import memeServices from '../services/memeServices';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../states/user';

const useAuthentication = () => {
  const navigate = useNavigate();
  const { user, onSetUser, onClearUser } = useUser();
  // console.log(onClearUser)
  const logout = () => {
    removeItemFromLocalStorage(PROFILE_STORAGE_KEY);
    onClearUser();
    navigate('/login');
  };
  //call api then save
  const login = async (username, password) => {
    const { data: { accessToken, refreshToken, user } } = await memeServices.login({ username, password });
    addItemToLocalStorage(PROFILE_STORAGE_KEY, { accessToken });
    onSetUser(user);
  };
  //register
  const registerUser = async (registerData) => {
    return await memeServices.register(registerData);
  };
  const isLoggedIn = user.id > 0;

  return {
    user,
    logout,
    login,
    isLoggedIn,
    registerUser,
  };
};

export default useAuthentication;