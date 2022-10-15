import { Box, Center, Image, Button, IconButton } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CatImage from "../components/CatImage";
import { getCatImages, reset } from "../features/cats/catSlice";
import { FcLike } from "react-icons/fc";
import { likeCatImage } from "../features/like/likeSlice";

const CatPage = () => {
  const { catImages, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.cat
  );
  const {likes} = useSelector((state) => state.like);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const onLikeClick = (catData) => {
    dispatch(likeCatImage(catData));
    console.log(catData);
  };

  useEffect(() => {
    dispatch(getCatImages());
  }, [dispatch]);

  return (
    <>
      <Box bgColor="blue.100" height="95vh">
        {user ? (
          <Box>
            <Center
              display="flex"
              flexDir="row"
              justifyContent="center"
              flexWrap="wrap"
            >
              {catImages.map((catImage) => (
                <>
                  <Box flexWrap="wrap" marginX="10px" marginY="5px" w="30%">
                    <Box border="1px solid pink">
                      <CatImage key={catImage.id} cat={catImage} />
                    </Box>
                    <Center marginTop="5px"  >
                      <IconButton
                        variant=""
                        aria-label="Like"
                        fontSize="20px"
                        icon={<FcLike />}
                        onClick={() => onLikeClick(catImage)}
                      />
                    </Center>
                  </Box>
                </>
              ))}
            </Center>
          </Box>
        ) : (
          <Box>
            <Center>You need to login to see this page</Center>
          </Box>
        )}
      </Box>
    </>
  );
};

export default CatPage;
