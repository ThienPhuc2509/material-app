import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [users, setUsers] = useState();
  const [materials, setMaterials] = useState();
  const getData = async () => {};
  useEffect(async () => {
    const getData = async () => {
      const usersdata = await axios.get(`/users/`);

      localStorage.setItem("users", JSON.stringify(usersdata.data));
      setUsers(usersdata.data);
    };
    const getMaterial = async () => {
      const materialsdata = await axios.get(`/materials/`);
      localStorage.setItem("materials", JSON.stringify(materialsdata.data));
      setMaterials(materialsdata.data);
    };
    getData();
    getMaterial();
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
