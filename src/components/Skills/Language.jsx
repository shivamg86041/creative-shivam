import React from 'react';
import { Wrapper } from './Style';

const Language = () => {
  return (
    <Wrapper>
      <div className="skills__content">
        <h3 className="skills__title">
          Programming Languages and Tools
        </h3>

        <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                C++
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
                                JavaScript
                            </h3>
                            <span className="skills__level">
                                Advanced
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                Core Java
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
                                Github
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
  );
};

export default Language;
