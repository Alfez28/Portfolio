import React from 'react'

export default function Projects() {
    return (
        <div className='projects d-flex flex-column align-items-center p-5'>
            <h1>Project's</h1>
            <br />

            <div className="pfirst d-flex justify-content-evenly gap-3" style={{ flexWrap: "wrap" }}>
                <div className="procard">
                    <img src="./assets/img/p1.png" alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Know More</h2>
                            <p>Just see more about that Project.</p>
                            <button>See More</button>
                        </div>
                    </div>
                </div>
                <div className="procard">
                    <img src="./assets/img/p2.png" alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Know More</h2>
                            <p>Just see more about that Project.</p>
                            <button>See More</button>
                        </div>
                    </div>
                </div>
                <div className="procard">
                    <img src="./assets/img/p3.png" alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Know More</h2>
                            <p>Just see more about that Project.</p>
                            <button>See More</button>
                        </div>
                    </div>
                </div>
                <div className="procard">
                    <img src="./assets/img/p4.png" alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Know More</h2>
                            <p>Just see more about that Project.</p>
                            <button>See More</button>
                        </div>
                    </div>
                </div>
                <div className="procard">
                    <img src="./assets/img/p5.png" alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Know More</h2>
                            <p>Just see more about that Project.</p>
                            <button>See More</button>
                        </div>
                    </div>
                </div>
                <div className="procard">
                    <img src="./assets/img/p6.png" alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Know More</h2>
                            <p>Just see more about that Project.</p>
                            <button>See More</button>
                        </div>
                    </div>
                </div>


            </div>
            <br />

            <button className='project-btn'>View More</button>


        </div>
    )
}
