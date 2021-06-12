import { Form, Button } from "react-bootstrap";
import { addUser } from "../../../Utilities/api";
import { useDispatch } from "react-redux";
import {
  isLoading,
  isLoaded,
  loggedIn,
} from "../../../features/auth/authSlice";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginCreds, setLoginCreds] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isLoading());
    if (loginCreds.password === loginCreds.password2) {
      addUser(loginCreds)
        .then((res) => {
          dispatch(loggedIn({ username: res.username }));
          dispatch(isLoaded());
          setLoginCreds({
            username: "",
            password: "",
            email: "",
          });
          history.push("/start");
        })
        .catch((err) => console.error(err));
    } else {
      console.error("passwords do not match");
    }
  };
  return (
    <Form className="w-100">
      <Form.Group controlId="formBasicUsername">
        <Form.Control
          type="text"
          name="username"
          value={loginCreds.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="email"
          value={loginCreds.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          name="password"
          onChange={handleChange}
          value={loginCreds.password}
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          name="password2"
          onChange={handleChange}
          value={loginCreds.password2}
          placeholder="Re-Enter Password"
        />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
