import { useState } from "react";
import PhotoModal from "../PhotoModal";

const PhotoSingle = ({imageURL }) => {
    const [showModal, setShowModal] = useState(false);


    return (
        <div key={imageURL} className='image-container'>
                    <button className='photo-modal-btn' onClick={() => setShowModal(true)}>
                        <div className= 'photo-modal-btntxt'>Invalid image URL</div>
                        <img className='actual-image' src={imageURL} alt=''></img>
                    </button>
                    <PhotoModal hideModal={() => setShowModal(false)} showModal={showModal} imageURL={imageURL} />
        </div>
    )
}

export default PhotoSingle;
