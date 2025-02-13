import React, { useState } from 'react';
import BookForm from './BookForm';
import './BookItem.css';
const BookItem = ({ book, deleteBook, updateBook, editMode, onEdit, onCancelEdit }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = () => {
    deleteBook(book.id);
  };

  const handleUpdate = (updatedBook) => {
    updateBook(book.id, updatedBook);
    setShowEditForm(false);
  };

  return (
    <div className="book-item">
      {!editMode ? (
        <>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Summary: {book.summary}</p>
          <div className="button-container">
            <button onClick={() => onEdit(book.id)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      ) : (
        <div className="edit-form-container">
          <BookForm
            initialFormData={book}
            editBook={handleUpdate}
            clearForm={onCancelEdit}
          />
        </div>
      )}
    </div>
  );
};

export default BookItem;
