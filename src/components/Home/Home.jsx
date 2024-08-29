import React from 'react';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Social from './Social';
import { Wrapper } from './Style';

const Home = () => {
  return (
    
    <Wrapper>
        <section className="home section" id='home'>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>

                    <div className="home__img"></div>

                    <Data/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    </Wrapper>

  )
}

export default Home
