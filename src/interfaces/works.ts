
export interface CreateWork {
    title: string
    subtitle: string
    url: string
    description: string
    features: string[]
    techStack: string[]
    image:string,
}

export interface Work extends CreateWork {
    id: string
}