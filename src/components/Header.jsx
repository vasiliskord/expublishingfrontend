import { Box, Spinner, Link, textDecoration } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);


  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Box
        w="100%"
        h="5vh"
        bgColor="pink"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="5"
      >
        <Box
          as="button"
          onClick={() => navigate("/cat")}
          fontSize="xl"
          fontWeight="bold"
          color="white"
        >
          Cat
        </Box>
        {user ? (
          <Box as="button" fontSize="xl" fontWeight="bold" color="white">
            <Link
              href="/"
              onClick={() => dispatch(logout())}
              _hover={{ textDecoration: "none" }}
            >
              Logout
            </Link>
          </Box>
        ) : (
          <Box as="button" fontSize="xl" fontWeight="bold" color="white">
            <Link href="/" _hover={{ textDecoration: "none" }}>
              Login
            </Link>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Header;
