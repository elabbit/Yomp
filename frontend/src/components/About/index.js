import './About.css'


const About = () => {


    return (
        <div className="body-container">

            <div className="body-content">
                <div className="about-container">
                    <div className='about-text'>
                        Combining my love for burgers and the desire to grow my skills as a software developer. This is my first solo full stack project built with a <span className='bold'>React/Redux</span> frontend and a <span className='bold'>NodeJS/Express</span> backend.
                    </div>
                    <div id='signature'>
                        <div>Live. Lau. Love.</div>
                        <div>-Eddie Lau</div>
                    </div>
                </div>
                <div className="about-container-contact">
                    <h2>Contact Me</h2>
                    <div className='about-text-contact'>
                        <div>Email: <a className="contact-link" href="mailto:edwinjlau26@gmail.com"><span className='bold'>edwinjlau26@gmail.com</span></a></div>
                        <div>Project Repo: <a className="contact-link" href="https://github.com/elabbit/Yomp"><span className='bold'>yomp</span></a></div>
                        <div className="icon-container">
                            <div>Github: <a className="contact-link" href="https://github.com/elabbit"> <i className="fa-brands fa-github"></i></a></div>
                            <div>LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/edwin-lau-312a11241/"> <i className="fa-brands fa-linkedin-in"></i></a></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default About;
