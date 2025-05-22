import React from 'react'

export default function Contact() {
    return (
        <div className='contact d-flex p-5'>
            <h1>Contact With Me</h1>
            <br />

            <div className="form" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="top d-flex gap-5">
                    <input type="text" placeholder='Enter Your Name' />
                    <input type="number" placeholder='Enter Your Phone No.' />
                </div>
                <div className="down d-flex gap-5">
                    <input type="email" placeholder='Enter Your E-mail' />
                    <input type="text" placeholder='Enter Your Subject' />
                </div>
                <div className="last">
                    <input type="text" placeholder='Type Your Message' />
                </div>
                <button>Send Message <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg></button>
            </div>
        </div>
    )
}
