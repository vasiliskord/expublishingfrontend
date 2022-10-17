import { Box, Center, Image, Button, IconButton, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CatImage from "../components/CatImage";
import { getCatImages, reset } from "../features/cats/catSlice";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { likeCatImage, unlikeCatImage } from "../features/like/likeSlice";

const CatPage = () => {
  const { catImages, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.cat
  );
  const [likeActive, setLikeActive] = useState(false);

  const { likes } = useSelector((state) => state.like);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const onLikeClick = (catData) => {
    setLikeActive(!likeActive);
    dispatch(likeCatImage(catData));
  };

  const onUnlikeClick = (catData) => {
    setLikeActive(!likeActive);
    dispatch(unlikeCatImage(catData));
  };

  console.log(likeActive);
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
                    <Center marginTop="5px">
                      {likes.find((like) => like.id === catImage.id) ? (
                        <IconButton
                          variant=""
                          aria-label="like"
                          icon={<FcLike />}
                          onClick={() => onUnlikeClick(catImage)}
                        />
                      ) : (
                        <IconButton
                          variant=""
                          aria-label="like"
                          icon={<FcLikePlaceholder />}
                          onClick={() => onLikeClick(catImage)}
                        />
                      )}
                    </Center>
                  </Box>
                </>
              ))}
            </Center>
          </Box>
        ) : (
          <Center paddingTop="50px">
            <Text fontSize="xl">You need to login to see this page</Text>
          </Center>
        )}
      </Box>
    </>
  );
};

export default CatPage;
