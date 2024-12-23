export interface CreateProject {
    title: string,
    description: string,
    techStack: string[],
    git: string,
    link?: string
}

export interface Project extends CreateProject {
    id: string,

}