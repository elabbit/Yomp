import React, { useState } from 'react';
import ReviewEditForm from '../ReviewEditForm';
import ReviewDeleteModal from '../ReviewDeleteModal'
import "./RevEditToggle.css"

const RevEditToggle = ({ rev, toggleRev}) => {

    const [showRevEdit, setShowRevEdit] = useState(false);

    const onEditRev = () =>{
        toggleRev()
        setShowRevEdit(true)
    }

    return (
        showRevEdit ?
            <ReviewEditForm hideForm={() => setShowRevEdit(false)} toggleRev={toggleRev} rev={rev}/>
            :
            <div className='edit-rev-buttons'>
                <button onClick={onEditRev}>Edit</button>
                <ReviewDeleteModal rev={rev} />
            </div>

    )


}

export default RevEditToggle;
