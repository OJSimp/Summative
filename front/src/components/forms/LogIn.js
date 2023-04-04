import { useState } from "react";

import { useLogIn } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";
// import { useGetUser } from "../../hooks/useGetUser";

import { useNavigate } from "react-router-dom";

import "./LogIn.scss";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogIn();

  // check if user is logged in from token
  const { user } = useAuthContext();

  // get user details after logged in
  // const { userDetails } = useGetUser();

  // navigate to search

  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();

    await login(email, password, error);
  };

  return (
    <form className="form__log-in" onSubmit={handleLogIn}>
      <input
        type="text"
        placeholder=""
        className="text-input--icon"
        id="log-in--email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label
        htmlFor="log-in__email"
        className="text-input__label"
        id="log-in--email"
      >
        <span>Email address</span>
      </label>

      <input
        type="password"
        placeholder=""
        className="text-input--icon"
        id="log-in--password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label
        htmlFor="log-in--password"
        className="text-input__label"
        id="log-in--password"
      >
        <span>Password</span>
      </label>

      {/* error received from backend (userModel & userController) and displayed here using the hook useLogIn */}

      {error && <div className="form-mesage--error">{error}</div>}

      <button className="btn-primary">Log In</button>
    </form>
  );
};

export default LogIn;
