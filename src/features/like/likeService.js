import axios from "axios";


//like a cat image
export const likeCatImage = async (catData) => {
     localStorage.setItem("like", JSON.stringify(catData));
     return catData;
};

//unlike a cat image
export const unlikeCatImage = async (catData) => {
    localStorage.removeItem(catData);
    return catData;
}


const likeService = {
    likeCatImage,
    unlikeCatImage,
};

export default likeService;