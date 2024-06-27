import React from 'react'
import '../new/for.css'
export default function For_student() {
    //making the not copy able text

    const handlecopy = (event) => {
        event.preventDefault();
        alert("Copying is not allowed. This content is protected by copyright.")
    }
    return (
        <div onCopy={handlecopy} className='for_students'>

            <div className="what-for-us">
                <h1 className="for-us">Features</h1>
            </div>
            <div className="what-to">
                <div className="col-preginations">
                    <div className="row-preginations">
                        <div className="image-box">
                            <img src="https://cdn.dribbble.com/users/5263864/screenshots/17280292/media/97209d8e34a69cb9a3cf6a9df0fafed6.gif" alt="" className='student' />
                        </div>
                    </div>
                    <div className="row-preginations">
                        <div className="detailssss">
                            <h1 className="title">
                                What's in it for Students</h1>
                            <p className="pata">The school management system provides better and necessary features to support activities in the education sector such as distance education, and learning classrooms. The system helps to make, distribute, administer and control all the activities that are related to learning and act as a tribute to classroom learning.</p>
                        </div>
                    </div>



                </div>
                <div className="col-preginations">

                    <div className="row-preginations">
                        <div className="detailssss">
                            <h1 className="title">
                                What's in it for Teachers</h1>
                            <p className="pata">The school management system allows teachers to provide consolidated and efficient learning to students and they can interact with students. They make sure all students get fair access to everything they require when necessary, ensuring that all students benefit from educational opportunities.</p>
                        </div>
                    </div>
                    <div className="row-preginations">
                        <div className="image-box">
                            <img src="https://cdn.dribbble.com/users/998555/screenshots/2534708/media/91f18d315c068eda6a8fd20c254f732d.gif" alt="" className='student' />
                        </div>
                    </div>



                </div>
                <div className="col-preginations">
                    <div className="row-preginations">
                        <div className="image-box">
                            <img src="https://cdn.dribbble.com/users/1129235/screenshots/3631654/media/88476ecf4678cb657a331b7a3aa166e1.gif" alt="" className='student' />
                        </div>
                    </div>
                    <div className="row-preginations">
                        <div className="detailssss">
                            <h1 className="title">

                                What's in it for Admins</h1>
                            <p className="pata">The school management software has a fantastic team and they offer quality services. They have the responsibility of supervising the school and providing day-to-day support to all the staff and students. They also help them understand and fix issues in staff meetings and other processes that concern the school.</p>
                        </div>
                    </div>



                </div>

            </div><span className='new-arm'><img src="https://th.bing.com/th/id/R.1d9a010c2ccf739d0252bea3df31ecee?rik=Su4eLGbyIOFkUA&riu=http%3a%2f%2fclipground.com%2fimages%2fgreen-triangles-clipart-1.jpg&ehk=L%2fYnBYLDv%2fOqQI3xiRFrqacM%2bMCgOZNIn54sAh6QqSw%3d&risl=&pid=ImgRaw&r=0" alt="" className='new-arr' /></span>
        </div>
    )
}
