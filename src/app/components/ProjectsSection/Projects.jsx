import React from 'react'
import ProjectCard from './ProjectCard'

import { projects } from './projectsInfo'

const Projects = () => {
    return (
        <section className='project' id='projects'>
            <h2>Projects</h2>
            {projects.map((project, idx) => (
                <ProjectCard key={idx}
                    imgUrl={""}
                    title={""}
                    description={""}
                />
            ))}

        </section>
    )
}

export default Projects