import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data'
import { Wrapper } from './Style'
import WorkItems from './WorkItems'

const Works = () => {
    const [item,setItem] = useState({ name: "all"});
    const [projects,setProjects] = useState(projectsData);
    const [active,setActive] = useState(0);
    
    const handleClick = (e,index) => {
        setItem({name : e.target.textContent});
        setActive(index);
    }
  return (
    <Wrapper>
        <div>
        <div className="work__container container grid">
            {projects.map((item) => {
                return <WorkItems item={item} key={item.id}/>
            })}
        </div>
        </div>
    </Wrapper>
  )
}

export default Works
