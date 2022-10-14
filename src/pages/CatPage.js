import { Box, Center, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CatImage from "../components/CatImage";
import { getCatImages, reset } from "../features/cats/catSlice";

const CatPage = () => {
  const { catImages, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.cat
  );
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCatImages());
  }, [dispatch]);

  return (
    <>
      {user ? (
        <Box>
          <Center
            display="flex"
            flexDir="row"
            justifyContent="center"
            flexWrap="wrap"
          >
            {catImages.map((catImage) => (
              <Box flexWrap="wrap" marginX="10px" marginY="10px" w="30%">
                <Box border="1px solid pink">
                  <CatImage key={catImage.id} cat={catImage} />
                </Box>
              </Box>
            ))}
          </Center>
        </Box>
      ) : (
        <Box>
          <Center>You need to login to see this page</Center>
        </Box>
      )}
    </>
  );
};

export default CatPage;
