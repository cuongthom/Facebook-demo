import {addItemToLocalStorage, getLocalStorageObject, removeItemFromLocalStorage} from '../util';
import {PROFILE_STORAGE_KEY} from '../constants';
import memeServices from '../services/memeServices';
import {useNavigate} from 'react-router-dom';
import {useMemo, useState} from "react";
// import { useUser } from '../states/user/hooks';

const useAuthentication = () => {
  const navigate = useNavigate();
  // const {  onClearUser } = useUser();
  const [user, setUser] = useState(getLocalStorageObject(PROFILE_STORAGE_KEY) && getLocalStorageObject(PROFILE_STORAGE_KEY).user)
  // console.log(onClearUser)
  const logout = () => {
    removeItemFromLocalStorage(PROFILE_STORAGE_KEY);
    // onClearUser();
    setUser(null)
    navigate('/login');
  };
  //call api then save
  const login = async (username, password) => {
    const {data: {accessToken, refreshToken, user}} = await memeServices.login({username, password});
    addItemToLocalStorage(PROFILE_STORAGE_KEY, {accessToken, user});
    setUser(user)
    // onSetUser(user);
  };
  //register
  const registerUser = async (registerData) => {
    console.log("cuongthom",registerData);
    return await memeServices.register(registerData);
  };
  const isLoggedIn = useMemo(() => !!user, [user]);
  return {
    user,
    logout,
    login,
    isLoggedIn,
    registerUser,
    navigate,
  };
};

export default useAuthentication;