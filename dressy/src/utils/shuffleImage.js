
import img1 from "../assets/dresses/1.jpg"
import img2 from "../assets/dresses/2.jpg"
import img3 from "../assets/dresses/3.jpg"
import img4 from "../assets/dresses/4.jpg"



const shuffleImage = () =>
{

    const images = [img1,img2,img3,img4];
    const rand = Math.floor(Math.random()*4)
    return images[rand];
}
export {shuffleImage};