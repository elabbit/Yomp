import React, { useState } from 'react';
import ReviewEditForm from '../ReviewEditForm';
import ReviewDeleteModal from '../ReviewDeleteModal'

const RevEditToggle = ({ rev }) => {

    const [showRevEdit, setShowRevEdit] = useState(false);

    return (
        showRevEdit ?
            <ReviewEditForm hideForm={() => setShowRevEdit(false)} rev={rev}/>
            :
            <div>
                <button onClick={() => setShowRevEdit(true)}>Edit</button>
                <ReviewDeleteModal rev={rev} />
            </div>

    )


}

export default RevEditToggle;
