import { ArticleAction, ArticleState, IArticle } from '../type'
import * as actionTypes from './actionTypes'

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "post 1",
      body: "salkl;kasjf"
    },
    {
      id: 2,
      title: "post 2",
      body: "qwertyt"
    },
  ]
}

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Date.now(),
        title: action.article.title,
        body: action.article.body
      }

      return {
        ...state,
        articles: state.articles.concat(newArticle)
      }

    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        article => article.id !== action.article.id
      )

      return {
        ...state,
        articles: updatedArticles
      }
    
    default:
      return state
  }
}

export default reducer
