import { useCallback, useContext } from "react";
import { ArticleContext, ArticleValues } from "../context/ArticlesContext";
import { Gist } from "../interfaces/gist";

export function useArticles() {

    const context = useContext(ArticleContext) as ArticleValues

    if (!context) throw new Error("Article context provider is required");

    const { dispatch, state } = context

    const getById = useCallback((id: string) => {
        return state.articles.find((article) => article.id === id)
    }, [state])
    const getByCat = useCallback((cat: string) => {
        return state.articles.find((article) => article.category = cat)
    }, [state])
    const addArticle = useCallback((gist: Gist) => {
        dispatch({ type: "loading" })
        dispatch({ type: "add", payload: gist })
    }, [state])

    return { loading: state.loading, articles: state.articles, getById, getByCat, addArticle }

}