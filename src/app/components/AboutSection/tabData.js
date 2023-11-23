import iconsSvg from "./svgIcons";

export const TAB_DATA = {
    "skills": {
        title: "Skills",
        content:
            <>
                <ul className="flex flex-row space-x-1 flex-wrap mb-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
                    <strong>
                        <li>Languages: </li>
                    </strong><br />
                    <li>JavaScript {iconsSvg.js} •</li>
                    <li>TypeScript {iconsSvg.ts} •</li>
                    <li>Node.js {iconsSvg.node} •</li>
                    <li>Golang {iconsSvg.go} •</li>
                    <li>Java {iconsSvg.java} •</li>
                    <li>Python {iconsSvg.python} •</li>
                    <li>C++ {iconsSvg.cpp}</li>
                </ul>
                <hr className="mt-2 mb-3" />
                <ul className="flex flex-row space-x-1 flex-wrap mb-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
                    <strong>
                        <li>Frameworks and libraries: </li>
                    </strong><br />
                    <li>React {iconsSvg.react} •</li>
                    <li>Angular {iconsSvg.angular} •</li>
                    <li>Next.js {iconsSvg.next} •</li>
                    <li>SpringBoot {iconsSvg.spring} •</li>
                    <li>Django {iconsSvg.django} •</li>
                    <li>Nest.js {iconsSvg.nest} •</li>
                    <li>PrismaORM •</li>
                    <li>Express {iconsSvg.express} •</li>
                    <li>Axios.js •</li>
                    <li>Tailwind {iconsSvg.tailwind} •</li>
                    <li>Styled-components •</li>
                    <li>MaterialUI {iconsSvg.materialui} •</li>
                </ul>
                <hr className="mt-2 mb-3" />
                <ul className="flex flex-row space-x-1 flex-wrap mb-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
                    <strong>
                        <li>Databases: </li>
                    </strong><br />
                    <li>PostgreSQL {iconsSvg.postgres} •</li>
                    <li>MySQL {iconsSvg.mysql} •</li>
                    <li>MongoDB {iconsSvg.mongodb}</li>
                </ul>
                <hr className="mt-2 mb-3" />
                <ul className="flex flex-row space-x-1 flex-wrap mb-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
                    <strong>
                        <li>Cloud and CI/CD: </li>
                    </strong><br />
                    <li>Docker {iconsSvg.docker}•</li>
                    <li>AWS {iconsSvg.aws}•</li>
                    <li>GitHub {iconsSvg.github}•</li>
                    <li>GitHub Actions</li>
                </ul>
                <hr className="mt-2 mb-3" />

            </>
    },
    "education": {
        title: "Education",
        content: <>
            <ul className="flex flex-row space-x-1 flex-wrap mb-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
                <strong>
                    <li>Federal University of Technology - Paraná (UTFPR): </li>
                </strong><br />
                <li>• Mechanical Engineering GPA: 8.5/10</li>
            </ul>
            <ul className="flex flex-row space-x-1 flex-wrap mb-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
                <strong>
                    <li>Full Stack Web Development at Driven Education:</li>
                </strong><br />
                <li>
                    • Intensive training of +1,200 hours focused on +25 practical projects.
                </li>
                <li>
                    • Programming Languages: JavaScript, TypeScript, HTML, CSS.
                </li>
                <li>
                    • Libraries and Frameworks: React, Node.js, Express, Nest.js, Styled-components, PrismaORM.
                </li>
                <li>
                    • Databases: MongoDB, PostgreSQL, SQL, Redis.
                </li>
                <li>
                    • Testing: Unit tests and integration tests with Jest, Cypress, and Supertest.
                </li>
                <li>
                    • Infrastructure and DevOps: RESTful API, Docker, AWS, CI/CD, GitHub Actions, and code versioning.
                </li>
                <li>
                    • Methodologies and Practices: Agile methodologies (SCRUM), programming logic, data structures, object-oriented programming, software architecture, best development practices, clean code.
                </li>
                <li>
                    • Collaboration Tools: Git, Slack, Discord, Trello, Zoom, and Figma.
                </li>
            </ul>
        </>
    },
    "certfications": {
        title: "Certfications",
        content: <>
            <ul className="flex flex-col space-x-1 flex-wrap mb-2">
                <strong>
                    <li>Relevant Coursework: </li>
                </strong><br />
                <li className="mb-4">• Foundations of Data Structures and Algorithms - University of Colorado Boulder
                    <br /><a
                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/AXYD6BA3KYSQ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong className="text-[#ADB7BE] hover:text-white">See certificate</strong>
                    </a>
                </li>
                <li className="mb-4">• Object Oriented Programming - University of London, Goldssmiths
                    <br /><a
                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/89498LJ7JRBP"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong className="text-[#ADB7BE] hover:text-white">See certificate</strong>
                    </a>
                </li>
                <li className="mb-4">• Building Web Applications in Django - University of Michigan
                    <br /><a
                        href="https://www.coursera.org/account/accomplishments/certificate/3Z3UA3862MQ2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong className="text-[#ADB7BE] hover:text-white">See certificate</strong>
                    </a>
                </li>
                <li className="mb-4">• Angular Developer - IFood Potência Tech
                    <br /><a
                        href="https://www.dio.me/certificate/68753E40/share"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong className="text-[#ADB7BE] hover:text-white">See certificate</strong>
                    </a>
                </li>
                <li className="mb-4">• Advanced React - Meta
                    <br /><a
                        href="https://www.coursera.org/account/accomplishments/certificate/DG7YMDBAFEXQ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong className="text-[#ADB7BE] hover:text-white">See certificate</strong>
                    </a>
                </li>
            </ul>
        </>
    }
};