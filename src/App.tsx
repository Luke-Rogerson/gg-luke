/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState, useCallback, useRef } from 'react'

import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'

import './App.css'
import { Card } from './components/Card/Card'
import { addBooks, AddBooksAction } from './redux/actions'
import { State } from './redux/reducers'
import { Book, FetchBookOptions, Response } from './types/types'

const fetchBooks = (options: FetchBookOptions): Promise<Response> =>
    fetch('http://nyx.vima.ekt.gr:3000/api/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(options),
    }).then((res) => res.json())

const itemsPerPage = 20

export const App: React.FC = () => {
    const [page, setPage] = useState(1)
    const [getBooks, { isLoading }] = useMutation(fetchBooks)

    const dispatch = useDispatch<Dispatch<AddBooksAction>>()
    const books = useSelector<State>((state) => {
        return state.books
    }) as Book[]

    const observerRef = useRef<HTMLDivElement>(null)

    const saveToStore = useCallback(() => {
        getBooks({ page, itemsPerPage: 20 }).then((res) => {
            if (res?.books) {
                dispatch(addBooks(res?.books))
                const totalPages = Math.floor(res.count / itemsPerPage)
                window.history.replaceState(null, ``, `?page=${page}`)
                document.title = `Page ${page} of ${totalPages}`
            }
        })
    }, [dispatch, getBooks, page])

    useEffect(() => {
        saveToStore()
    }, [dispatch, saveToStore, page])

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && books && !isLoading) {
                setPage(page + 1)
            }
        }, {})

        if (observerRef.current && books) {
            observer.observe(observerRef.current)
        }

        return () => observer.disconnect()
    }, [books, isLoading, page])

    return (
        <div className="App">
            {isLoading && <p>Loading...</p>}
            {books.map(({ book_title, book_author, book_publication_year, id }) => (
                <Card
                    key={id}
                    book_title={book_title}
                    book_author={book_author}
                    book_publication_year={book_publication_year}
                />
            ))}
            <div style={{ minHeight: '10px', marginBottom: '1rem' }} aria-hidden ref={observerRef} />
        </div>
    )
}
