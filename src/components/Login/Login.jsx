import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeLogin } from "../../Redux/action";
import { Wrapper } from "./Logincss";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobile: "",
  });

  const handleLogin = (e) => {
    let { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleRegister = (e) => {
    let { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleLog = async (e) => {
    e.preventDefault();

    await axios
      .post("https://enigmatic-meadow-51097.herokuapp.com/users/login", login)
      .then((res) => {
        alert("Login success");
        dispatch(changeLogin(1));
        navigate("/");
      })
      .catch((er) => {
        alert("fail" + er);
      });
  };

  const handleSign = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://enigmatic-meadow-51097.herokuapp.com/users/register",
        register
      )
      .then((res) => {
        alert("register success");
      })
      .catch((er) => {
        alert("fail" + er);
      });
  };

  return (
    <Wrapper>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLog} id="log">
          <input
            type="text"
            placeholder="email"
            name="email"
            value={login.email}
            onChange={handleLogin}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={login.password}
            onChange={handleLogin}
          />
          <input type="submit" value={"Login"} />
        </form>
      </div>
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSign} className="reg">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={register.firstName}
            onChange={handleRegister}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={register.lastName}
            onChange={handleRegister}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={register.email}
            onChange={handleRegister}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            value={register.mobile}
            onChange={handleRegister}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={register.password}
            onChange={handleRegister}
          />
          <input type="password" placeholder="re-enter Password" />
          <input type="submit" value={"register"} />
        </form>
      </div>
    </Wrapper>
  );
};
