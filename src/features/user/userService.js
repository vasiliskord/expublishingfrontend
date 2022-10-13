import axios from "axios";

//login user
export const login = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

//logout user
export const logout = () => {
  localStorage.removeItem("user");
};


const userService={
    login,
    logout
}

export default userService;