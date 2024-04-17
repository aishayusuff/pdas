/* eslint-disable react/prop-types */

function ProfileCard({title, handle, image, desc}) {
 
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="logo of a personal digital assistant" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
            </div>
            <div className="content">
                {desc}
            </div>
        </div>
        // <>
        //     
        //     <h3></h3>
        //     <h3>{handle}</h3> 
        // </>
    )
}

export default ProfileCard