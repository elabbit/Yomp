import { useEffect, useState } from "react";
import './Splash.css'
import s1 from "../../images/splash-strength2.png"
import s2 from "../../images/splash-cheese2.png"
import s3 from "../../images/splash-fitness2.png"
import s4 from "../../images/splash-buns3.png"



const Splash = () => {
    const images = [s1,s2,s3,s4];
    const [currentIndex, setCurrentIndex] = useState(0);

const changeImage = ()=>{
    if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
    }
    else {
        setCurrentIndex(currentIndex + 1);
    }
}


    useEffect(() => {
    }, [currentIndex])


return (
    <div id="splash-banner">
        <button onClick={changeImage}>

        <img src={images[currentIndex]} alt='' />
        </button>
    </div>
);
}

export default Splash;
