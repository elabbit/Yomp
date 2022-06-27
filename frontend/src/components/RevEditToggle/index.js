import React, { useState } from 'react';
import ReviewEditForm from '../ReviewEditForm';

const RevEditToggle = ({ rev }) => {

    const [showRevEdit, setShowRevEdit] = useState(false);

    return (
        showRevEdit ?
            <ReviewEditForm hideForm={() => setShowRevEdit(false)} rev={rev}/>
            :
            <div>
                <button onClick={() => setShowRevEdit(true)}>Edit</button>
                {/* <DeleteBusModal businessTitle={business.title} /> */}
            </div>

    )


}

export default RevEditToggle;
