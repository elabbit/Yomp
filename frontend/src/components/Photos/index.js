

import PhotoSingle from '../PhotoSingle';
import './Photos.css'


const Photos = ({ reviews }) => {




    return (
        reviews ?
        <div id="photos-container">
            <>
            <div className="rev-img-container">
                {reviews?.map((review) => (
                    review.Photos?.map((photo) => (
                        <div key={`photos${photo.id}`} className="rev-img">
                        <PhotoSingle imageURL={photo.imageURL}/>
                        </div>
                    )
                    ))
                )
                }
                </div>
            </>
        </div>
        :
        <h4>Loading...</h4>
    )

}

export default Photos;
