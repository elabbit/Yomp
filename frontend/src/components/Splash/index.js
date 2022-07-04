import { useEffect, useState } from "react";
import './Splash.css'
import s1 from "../../images/splash-cheese.png"
import s2 from "../../images/splash-fitness.png"
import s3 from "../../images/splash-strength.png"

const Splash = () => {
    const images = [s1,s2,s3];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
console.log(currentIndex)
        }, 10000)

        return () => clearInterval(timer);
    }, [currentIndex])


return (
    <div id="splash-banner">
        <img src={images[currentIndex]} alt='' />
    </div>
);
}

export default Splash;
