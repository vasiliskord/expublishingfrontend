import { Box, Center, Image, Tooltip, Button } from "@chakra-ui/react";

function CatImage({ cat }) {
  return (
    <>
      <Box>
        <Center>
          <Image
            src={cat.url}
            alt={cat.id}
            height="250px"
            w="100%"
            objectFit="cover"
          />
        </Center>
      </Box>
    </>
  );
}

export default CatImage;
