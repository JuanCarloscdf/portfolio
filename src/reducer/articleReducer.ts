import { ArticleState } from "../context/ArticlesContext";
import { Gist } from "../interfaces/gist";


export type ArticleActions =
    | { type: "get" }
    | { type: "loading" }
    | { type: "add", payload: Gist }
    | { type: "update", payload: Gist }
    | { type: "delete", payload: string }
    | { type: "byCat", payload: string }

export function articleReducer(state: ArticleState, action: ArticleActions): ArticleState {
    switch (action.type) {
        case "get":
            return state
        case "loading":
            return { ...state, loading: true }
        case "byCat":
            const newArticles = state.articles.filter((item) => item.category === action.payload)
            return { articles: newArticles, loading: false }
        case "delete":
            const deleted = state.articles.filter((item) => item.category === action.payload)
            return { articles: deleted, loading: false }
        case "update":
            const updated = state.articles.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })
            return { articles: updated, loading: false }
        case "add":
            return { articles: [...state.articles, action.payload], loading: false }
        default:
            return state
    }
}