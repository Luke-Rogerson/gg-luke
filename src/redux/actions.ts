import { Book } from '../types/types'

export const ADD_BOOKS = 'ADD_BOOKS'

export interface AddBooksAction {
    type: typeof ADD_BOOKS
    payload: Book[]
}

export const addBooks = (books: Book[]): AddBooksAction => ({ type: ADD_BOOKS, payload: books })
