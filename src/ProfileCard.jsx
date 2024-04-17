/* eslint-disable react/prop-types */

function ProfileCard({title, handle, image}) {
 
    return (
        <>
            <img src={image} alt="logo of a personal digital assistant" />
            <h3>{title}</h3>
            <h3>{handle}</h3> 
        </>
    )
}

export default ProfileCard