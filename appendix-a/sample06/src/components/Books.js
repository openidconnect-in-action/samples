import React from "react";
import BookRating from "./BookRating";

const Books = ({bookList}) => (
<div>
    <table>
        <tbody>
        {
        bookList.map((book) => (
        <tr key={book.id}>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td><BookRating></BookRating></td>
        </tr>
        ))
        }
        </tbody>
    </table>
</div>
);

export default Books;
