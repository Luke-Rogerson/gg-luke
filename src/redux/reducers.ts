import { Book } from '../types/types'
import { AddBooksAction } from './actions'

export interface State {
    books: Book[]
}

export const initialState: State = {
    books: [],
}

export const reducer = (state: State = initialState, action: AddBooksAction): State => {
    switch (action.type) {
        case 'ADD_BOOKS':
            return {
                books: [...state.books, ...action.payload],
            }
        default:
            return state
    }
}
