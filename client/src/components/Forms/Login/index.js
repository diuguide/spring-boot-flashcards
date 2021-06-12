import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { loginUser } from "../../../Utilities/api";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoading,
  isLoaded,
  loggedIn,
} from "../../../features/auth/authSlice";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  loginFailed,
  errorState,
  clearMessage,
} from "../../../features/error/errorSlice";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector(errorState);

  const [loginCreds, setLoginCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearMessage());
    dispatch(isLoading());
    loginUser(loginCreds)
      .then((res) => {
        console.log(res);
        dispatch(loggedIn({ username: res.data.username }));
        dispatch(isLoaded());
        setLoginCreds({
          username: "",
          password: "",
        });
        history.push("/start");
      })
      .catch(() => {
        dispatch(loginFailed());
      });
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
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          name="password"
          onChange={handleChange}
          value={loginCreds.password}
          placeholder="Enter Password"
        />
      </Form.Group>
      <Row>
        <Col lg={3}>
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Col>
        <Col lg={9}>
          {error.show && <Alert variant="danger">{error.msg}</Alert>}
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
