import React from 'react'
import About from './About'
import Myskills from './Myskills'
import Contact from './Contact'
import Projects from './Projects'

export default function Home() {

    return (
        <>
            <div className='home'>

                <div className="container col-xxl-10 px-4 py-4">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="himg col-10 col-sm-8 col-lg-6" data-aos="zoom-in"
                            data-aos-duration="2000">
                            <img src="./assets/img/vactor.svg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="1000" height="900" loading="lazy" />
                        </div>
                        <div className="homecontain col-lg-6" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000">
                            <h1 className="display-5 fw-bold lh-1 mb-3">I'M <b>Alfez Khan</b></h1>
                            <h3 className=" fw-bold lh-1 mb-3">Web Developer</h3>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="homebtn p-2">Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <div className="homecontain" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000">
                    <h1>I'M <b>Alfez Khan</b></h1>
                    <h3>Web Developer</h3>
                    <br />
                    <button className='p-2'>Contact Me</button>
                </div>
                <div className="himg" data-aos="zoom-in"
                    data-aos-duration="2000">
                    <img src="./assets/img/vactor.svg" alt="" />
                </div> */}

            </div>

            <About />
            <Myskills />
            <Projects />
            <Contact />
        </>
    )
}
