import React, { useState } from 'react'
import { Wrapper } from './Style'

const Qualification = () => {

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    }

    return (
        <Wrapper>
            <section className="qualification section">
                <h2 className="section__title">
                    Qualification
                </h2>
                <span className="section__subtitle">
                    My Personal Journey
                </span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className={toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                            onClick={() => { toggleTab(1) }}>
                            <i className="uil uil-graduation-cap qualification__icon"></i> Education
                        </div>

                        <div className={toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                            onClick={() => { toggleTab(2) }}>
                            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                        </div>
                    </div>

                    <div className="qualification__sections">
                        <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">SSC</h3>
                                    <span className="qualification__subtitle">Azad Public School</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2017-2018
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">HSC</h3>
                                    <span className="qualification__subtitle">Azad Public School</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2018 - 2020
                                    </div>
                                </div>


                            </div>

                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">IT</h3>
                                    <span className="qualification__subtitle">ABES Institute of Technology</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2020 - 2024
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>



                        </div>

                        <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>


                            <div className="qualification__data">



                                <div>
                                    <h3 className="qualification__title">Web Developer</h3>
                                    <span className="qualification__subtitle">ABHYAZ from MTAB Technology Center</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2023
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>


                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">MERN Stack Developer</h3>
                                    <span className="qualification__subtitle">Kanha Milk Testing Equipments Pvt. Ltd.</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>2023 - 2024
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default Qualification
