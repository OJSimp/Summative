import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogIn = () => {
  //if there is an error  // is loading
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // use the dispatch function to fire the right "case"
  const { dispatch } = useAuthContext();

  //sending data to databse using a post request
  const login = async (email, password) => {
    // starting request - so is loading & reset errors to null
    setLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8001/users/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    // send back webtoken if sucessful
    const json = await response.json();

    if (!response.ok) {
      // if not sucessful - send back error and finished loading
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // if sucessful - save user to local storage - (log user in)
      // userController.js returns in json email and token, from backend
      localStorage.setItem("user", JSON.stringify(json));

      // update authContext using authContext hook
      // AuthContext.js run case LogIn - send response as json - Log in user
      // can see this payload in devtools -> Application (not in console)
      console.log(json);
      dispatch({ type: "LOGIN", paylaod: json });

      // finsihed loading now false
      setLoading(false);
    }
  };

  // we need to return the "signup function", the "loading state" and the "error state"
  return { login, loading, error };
};
