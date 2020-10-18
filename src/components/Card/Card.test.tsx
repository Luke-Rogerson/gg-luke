import React from 'react'
import { render } from '@testing-library/react'
import { Card, CardProps } from './Card'

const props: CardProps = {
    book_title: 'Cool book',
    book_author: ['Nice author'],
    book_publication_year: '3000',
}

test('it should show book details', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByText } = render(<Card {...props} />)
    expect(getByText(props.book_title)).toBeDefined()
})
