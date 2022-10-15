import { getLikedCatImages } from "../features/like/likeSlice";
import { Box, Center, Image, Button, IconButton } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CatImage from "../components/CatImage";

const Favourites = () => {
  const [likedCatImages, setLikedCatImages] = useState({ url: "", id: "" });

  const { url, id } = likedCatImages;
  const { likes } = useSelector((state) => state.like);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLikedCatImages());
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
              {likes.map((like) => (
                <>
                  <Box flexWrap="wrap" marginX="10px" marginY="5px" w="30%">
                    <Box border="1px solid pink">
                      <CatImage key={like.id} cat={like} />
                    </Box>
                  </Box>
                </>
              ))}
            </Center>
          </Box>
        ) : (
          <Box>
            <Center>
              <h1>Please login to see your favourites</h1>
            </Center>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Favourites;
