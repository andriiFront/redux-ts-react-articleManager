import { type } from "os"

export interface IArticle {
  id: number
  title: string
  body: String
}

export type ArticleState = {
  articles: IArticle[]
}

export type ArticleAction = {
  type: string
  article: IArticle
}

export type DispatchType = (args: ArticleAction) => ArticleAction
