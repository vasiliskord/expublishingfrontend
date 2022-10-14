import { background, Box, Center, Button, Input } from "@chakra-ui/react";
import { login, reset } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const { username, password } = formData;
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <Center w="100%" h="100vh" bgColor="blue.100">
      <Center>
        <Center p="10" borderRadius="10" w="100%" h="100%">
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Input
              type="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
              border="2px solid"
              borderColor="pink"
              p="5"
              mb="5"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              border="2px solid"
              borderColor="pink"
              p="5"
              mb="5"
            />
            <Button bgColor="pink" type="submit">
              Login
            </Button>
          </form>
        </Center>
      </Center>
    </Center>
  );
}

export default Login;
