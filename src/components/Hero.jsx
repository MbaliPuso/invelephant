import React from 'react'
import "../styles/Hero.css"

const Hero = () => {
  return (
    <>
    <div className="container">
        <section className="hero-section">
            <div className="heading-section">
                <h2 className='investment-heading'>Investment Platform</h2>
            </div>
            <div className="main-heading-section">
                <h1>
                    <div className='heading-prefix'>Empowering Black South African Youth Through</div>
                    <div className="sliding-heading animated-text">
                        <div className='animated-text education'>Education</div>
                        <div className='animated-text economic-opportunities'>& Economic Opportunities</div>
                    </div>
                    <div className="sub-text">
                        <p>We are dedicated to creating sustainable development opportunities for Black South African youth. Our initiatives focus on education, economic empowerment, and community development to build a brighter future.</p>
                    </div>
                    <div className="invest-now-button">
                        <button className='start-investing-button'><span>Start Investing Now</span>  <span className='right-arrow'>→</span></button>
                    </div>
                    <div className="hero-image">
                        <img src="images/undraw_Invest_re_8jl5.png" alt="Invest Undraw Invelephant" className='hero-invest-image img-fluid' />
                    </div>
                </h1>
            </div>
        </section>
    </div>
    </>
  )
}

export default Hero