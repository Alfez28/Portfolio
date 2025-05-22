import React from 'react'

export default function Myskills() {
    return (
        <div className='myskills'>
            <h1>My Skills</h1>
            <div className="boxs  d-flex  p-5">
                <div className="html box" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300">
                    <img src="./assets/img/html.png" alt="" />
                    <br /><br />
                    <h4>HTML</h4>
                </div>
                <div className="css box" data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400">
                    <img src="./assets/img/css.png" alt="" />
                    <br /><br />
                    <h4>CSS</h4>
                </div>
                <div className="js box" data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="500">
                    <img src="./assets/img/js.png" alt="" />
                    <br /><br />
                    <h4>JAVA SCRIPT</h4>
                </div>
                <div className="reactjs box" data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="600">
                    <img src="./assets/img/reactjs.png" alt="" />
                    <br /><br />
                    <h4>REACT JS</h4>
                </div>
                <div className="bootstrap box" data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="700">
                    <img src="./assets/img/bootstrap.png" alt="" />
                    <br /><br />
                    <h4>BOOTSTRAP</h4>
                </div>
            </div>

        </div>
    )
}
