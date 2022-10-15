import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=9";

//like a cat image
export const likeCatImage = async (catData) => {
     localStorage.setItem("like", JSON.stringify(catData));
     return catData;
};

//unlike a cat image
export const unlikeCatImage = async (catImageId) => {
    localStorage.removeItem(catImageId);
}


//get all liked cat images
export const getLikedCatImages = async () => {
    const likedCatImages = [];
    for (let i = 0; i < localStorage.length; i++) {
        const catImageId = localStorage.key(i);
        likedCatImages.push(catImageId);
    }
    return likedCatImages;
    
};


const likeService = {
    likeCatImage,
    unlikeCatImage,
    getLikedCatImages
};

export default likeService;