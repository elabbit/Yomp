import React, { useState } from 'react';
import ReviewEditForm from '../ReviewEditForm';
import ReviewDeleteModal from '../ReviewDeleteModal'

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
            <div>
                <button onClick={onEditRev}>Edit</button>
                <ReviewDeleteModal rev={rev} />
            </div>

    )


}

export default RevEditToggle;
