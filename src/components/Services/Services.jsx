import React, { useState } from 'react'
import { Wrapper } from './Style'

const Services = () => {

    const [toggle,setToggle] = useState(false);

    const toggleTab = (index) =>{
        setToggle(index);
    }
  return (
    <Wrapper>
        <section className="services section" id="services">
        <h2 className="section__title">
                Services
            </h2>
            <span className="section__subtitle">
                What I Offer
            </span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className='uil uil-web-grid services__icon'></i>
                        <h3 className="services__title">
                        Web Designer
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More<i className='uil uil-arrow-right services__button-icon'></i>
                    
                    </span>

                    <div className={toggle === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className='uil uil-times services__modal-close'
                            onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title"> Web Designer</h3>
                            <p className="services__modal-description">
                                Services with more than 6 months of experience.Providing quality work to client and companies.
                            </p>

                            <ul className="services__model-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                        I develop the User Interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                        Web Page Development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                        Software Development
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                       I position Your Company brand.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                       Design of Products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className="services__title">
                            Software Development
                        </h3>
                    </div>
                    <span className="services__button">
                        View More<i className='uil uil-arrow-right services__button-icon' onClick={() => toggleTab(2)}></i>
                    
                    </span>

                    <div className={toggle === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Software Development</h3>
                            <p className="services__modal-description">
                                Services with more than 6 months of experience.Providing quality work to client and companies.
                            </p>

                            <ul className="services__model-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                        I develop the User Interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                        Web Page Development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                        Software Development
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                       I position Your Company brand.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                    </i>
                                    <p className="services__modal-info">
                                       Design of Products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Wrapper>
  )
}

export default Services
