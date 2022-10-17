import { Box, Center, Image, Button, IconButton, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CatImage from "../components/CatImage";
import { unlikeCatImage } from "../features/like/likeService";
import { FcLike } from "react-icons/fc";

const Favourites = () => {
  const { likes } = useSelector((state) => state.like);
  const { user } = useSelector((state) => state.user);
  const [likedImages, setLikedImages] = useState(likes);

  const dispatch = useDispatch();

  const onUnlikeClick = (catData) => {
    unlikeCatImage(catData);
    setLikedImages(likedImages.filter((image) => image.id !== catData.id));
  };

  return (
    <>
      <Box bgColor="blue.100" height="100% " minH="100vh">
        {user ? (
          <Box>
            <Center
              display="flex"
              flexDir="row"
              justifyContent="center"
              flexWrap="wrap"
            >
              {likedImages.length > 0 ? (
                likedImages.map((like) => (
                  <Box flexWrap="wrap" marginX="10px" marginY="5px" w="30%">
                    <Box border="1px solid pink">
                      <CatImage key={like.id} cat={like} />
                    </Box>
                    <Center>
                      <IconButton
                        variant=""
                        aria-label="like"
                        icon={<FcLike />}
                        onClick={() => onUnlikeClick(like)}
                      />
                    </Center>
                  </Box>
                ))
              ) : (
                <Center marginTop="50px">
                  <Text fontSize="xl">There are no liked images</Text>
                </Center>
              )}
            </Center>
          </Box>
        ) : (
          <Box>
            <Center marginTop="50px">
              <Text fontSize="xl">Please login to see your favourites</Text>
            </Center>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Favourites;
