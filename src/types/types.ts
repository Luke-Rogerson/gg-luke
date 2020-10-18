export interface FetchBookOptions {
    page?: number
    itemsPerPage?: number
    filters?: {
        type: 'all'
        values: string[]
    }[]
}

export interface Response {
    books: Book[]
    count: number
}

export interface Book {
    book_author: string[]
    book_publication_city: string
    book_publication_country: string
    book_publication_year: string
    book_pages: number
    book_title: string
    id: number
}
