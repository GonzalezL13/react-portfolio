import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

    // Replace links with deployed projects and GitHub repos
    const [projects] = useState([
        {
            name: 'my-schtick-kick',
            description: 'Full Stack',
            link: "https://fathomless-waters-65385.herokuapp.com/",
            repo: "https://github.com/heatherzen/myschtickkick"
        },
        {
            name: 'xpensifi',
            description: 'Front End',
            link: "https://niloccolin.github.io/group-project-1/",
            repo: "https://github.com/niloccolin/group-project-1"
        },
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "https://gonzalezl13.github.io/run-buddy/",
            repo: "https://github.com/GonzalezL13/run-buddy"
        },
        {
            name: 'budget-tracker',
            description: 'PWA',
            link: "https://enigmatic-inlet-14717.herokuapp.com/",
            repo: "https://github.com/GonzalezL13/budget-tracker-pwa"
        },
    ]);

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={"project" + idx}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
