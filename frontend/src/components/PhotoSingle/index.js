import { useState } from "react";
import PhotoModal from "../PhotoModal";

const PhotoSingle = ({imageURL }) => {
    const [showModal, setShowModal] = useState(false);


    const datify = (date) => {
        const newDate = new Date(date)
        return newDate.toDateString();

    }

    return (
        <div key={imageURL} className='image-container'>
                    <button onClick={() => setShowModal(true)}>
                        <img className='actual-image' src={imageURL} alt=''></img>
                    </button>
                    <PhotoModal hideModal={() => setShowModal(false)} showModal={showModal} imageURL={imageURL} />
        </div>
    )
}

export default PhotoSingle;
