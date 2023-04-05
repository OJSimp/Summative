import { useState } from "react";

import { useSignUp } from "../../hooks/useSignUp";

import { useNavigate } from "react-router-dom";

import { AiOutlineUser, AiTwotoneLock, AiOutlineMail } from "react-icons/ai";

import "./SignUp.scss";

const SignUp = () => {
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, loading } = useSignUp();

  // navigate to search

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // POST request being sent to useSignUp.js Hook
    await signup(firstName, lastName, email, password);
  };

  return (
    <form className="form--sign-up" onSubmit={handleSignUp}>
      <input
        type="text"
        placeholder=""
        className="text-input--icon"
        id="log-in--first-name"
        onChange={(e) => {
          setFristName(e.target.value);
        }}
        value={firstName}
      />
      <label
        htmlFor="log-in--first-name"
        className="text-input__label"
        id="log-in--first-name"
      >
        <span>First name</span>
      </label>
      <span className="input-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="#717171"
          />
        </svg>
      </span>

      <input
        type="text"
        placeholder=""
        className="text-input--icon"
        id="log-in--last-name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        value={lastName}
      />
      <label
        htmlFor="log-last-name"
        className="text-input__label"
        id="log-in--last-name"
      >
        <span className="input-label">Last name</span>
      </label>
      <span className="input-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="#717171"
          />
        </svg>
      </span>

      <input
        type="text"
        placeholder=""
        className="text-input--icon"
        id="log-in__email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />

      <label
        htmlFor="log-in__email"
        className="text-input__label"
        id="log-in__email"
      >
        <span>Email address</span>
      </label>
      <span className="input-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
            fill="#717171"
          />
        </svg>
      </span>

      <input
        type="password"
        placeholder=""
        className="text-input--icon"
        id="log-in--password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <label
        htmlFor="log-in--password"
        className="text-input__label"
        id="log-in--password"
      >
        <span>Password</span>
      </label>
      <span className="input-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
            fill="#717171"
          />
        </svg>
      </span>

      {/* error received from backend (userModel & userController) and displayed here using the hook useSignUp */}

      {error && <div className="form-mesage--error">{error}</div>}

      <button className="btn-primary">Sign Up</button>
    </form>
  );
};

export default SignUp;
