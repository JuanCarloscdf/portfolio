import { Project } from "../interfaces/projects";

export const mockProjects:Project[] = [
    {
        id: "yellowStyle",
        title: "YellowStyle",
        description: "A web design project featuring modern styling techniques and responsive layouts.",
        techStack: ["CSS", "HTML", "JavaScript"],
        git: "https://github.com/JuanCarloscdf/yellowStyle",
    },
    {
        id: "BaseTypeormNestjsConfig",
        title: "Base TypeORM with NestJS Config",
        description: "A foundational configuration for projects utilizing TypeORM with NestJS. Designed for ease of integration and scalability in backend applications.",
        techStack: ["TypeScript", "NestJS", "TypeORM"],
        git: "https://github.com/JuanCarloscdf/BaseTypeormNestjsConfig",
    },
    {
        id: "SendaVerde",
        title: "Senda Verde",
        description: "A web application designed to support eco-friendly initiatives, featuring interactive maps and sustainable resource guides.",
        techStack: ["React", "Node.js", "MongoDB"],
        git: "https://github.com/JuanCarloscdf/SendaBerde",
        link: "https://juancarloscdf.github.io/SendaBerde/"
    },
    {
        id: "Unident",
        title: "Unident",
        description: "A utility library for string manipulation, designed to simplify and clean up multiline string formatting.",
        techStack: ["JavaScript"],
        git: "https://github.com/JuanCarloscdf/UnidentAPI",
    },
    {
        id: "DockerContainers",
        title: "Docker Containers",
        description: "A collection of Docker container configurations for common development and deployment scenarios.",
        techStack: ["Docker", "Shell"],
        git: "https://github.com/JuanCarloscdf/DockerContainers",
    },
    {
        id: "MongoAPI",
        title: "Mongo API",
        description: "A simple RESTful API built with Node.js and MongoDB, focused on providing CRUD operations for applications.",
        techStack: ["Node.js", "MongoDB", "Express"],
        git: "https://github.com/JuanCarloscdf/moongoAPI",
    },
    {
        id: "TSMySQLAPI",
        title: "TS MySQL API",
        description: "A TypeScript-based API designed to interact with MySQL databases, providing a clean structure and efficient querying.",
        techStack: ["TypeScript", "MySQL", "Express"],
        git: "https://github.com/JuanCarloscdf/TSMySQLAPI",
    },
];
