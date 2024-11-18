import { createContext, ReactNode, useReducer } from "react"
import { Gist } from "../interfaces/gist"
import { ArticleActions, articleReducer } from "../reducer/articleReducer"
import { mockGist } from "../mocks/mockGist"


export type ArticleValues = {
    state: ArticleState,
    dispatch: (action:ArticleActions) => void
}


export type ArticleState = {
    articles: Gist[],
    loading: Boolean
}

export const ArticleContext = createContext<ArticleValues | null>(null)


const intialValue: ArticleState = {
    articles: mockGist,
    loading: false
}

export function ArticleProvider({ children }: { children: ReactNode }) {

    const [state, dispatch] = useReducer(articleReducer,intialValue) 
    const values = {
        state,
        dispatch
    }
    return (
        <ArticleContext.Provider value={values}>
            {children}
        </ArticleContext.Provider>
    )
}
