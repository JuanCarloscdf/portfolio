export interface CreateGist {
    title: string,
    description: string,
    category: string,
    language: string,
    gitLink?:string,
    sections: CodeBlokT[]
}

export interface CreateCodeBlock {
    title: string,
    code: string,
    description: string,
    notes?: { content: string, link?: string }
    info?: { content: string, link?: string },
    warning?: { content: string, link?: string }
}

export interface Gist extends CreateGist {
    id: string
    date: Date
}

export interface CodeBlokT extends CreateCodeBlock {
    id: string
}