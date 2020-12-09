import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Book from './Book';

function BookList(){
  return (
      <div className='booklist'>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
      </div>
    )
}


ReactDOM.render( <BookList/>,
  document.getElementById('root')
);
