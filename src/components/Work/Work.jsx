import React from 'react'
import { Wrapper } from './Style'
import Works from './Works.jsx'

const Work = () => {
  return (
    <Wrapper>
        <section className="work section" id="portfolio">
            <h2 className="section__title">My Projects</h2>
            <span className="section__subtitle">Based On Web Development</span>

            <Works/>
        </section>
    </Wrapper>
  )
}

export default Work
