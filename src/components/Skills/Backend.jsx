import React from 'react'
import { Wrapper } from './Style'

const Backend = () => {
  return (
   <Wrapper>
        <div className="skills__content">
            <h3 className="skills__title">
                Backend Developer
            </h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                Express Js
                            </h3>
                            <span className="skills__level">
                                Intermediate
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                Node Js
                            </h3>
                            <span className="skills__level">
                                Basic
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                SQL
                            </h3>
                            <span className="skills__level">
                                Intermediate
                            </span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                MongoDB
                            </h3>
                            <span className="skills__level">
                                Intermediate
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>   
            
   </Wrapper>
  )
}

export default Backend
