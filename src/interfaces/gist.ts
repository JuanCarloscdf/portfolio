export interface CreateGist {
    title:string,
    description:string,
    category:string,
    sections: CodeBlokT[]
}

export interface CreateCodeBlock {
    title:string,
    code:string,
    description:string,
    notes?:string
    info?:string,
    warning?:string
}

export interface Gist extends CreateGist {
    id:string
}

export interface CodeBlokT extends CreateCodeBlock{
    id:string
}