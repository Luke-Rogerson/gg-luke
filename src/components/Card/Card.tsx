import React from 'react'
import { Book } from '../../types/types'
import './Card.css'

export type CardProps = Pick<Book, 'book_title' | 'book_author' | 'book_publication_year'>

class Card extends React.Component<CardProps> {
    render() {
        const { book_title, book_author, book_publication_year } = this.props

        return (
            <div className="card-container">
                <p>{book_title}</p>
                <p>Written by {book_author}</p>
                <p>Published in {book_publication_year}</p>
            </div>
        )
    }
}

export { Card }
