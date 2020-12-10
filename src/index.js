import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import data from './data'
import Book from './Book';
import Album from './Album';


function BookList(){
  return (
    <div>
    <center><h1>Top Selling Book Section</h1></center>
      <div className='booklist' id = '1'>
        {data.map((data)=>{
            return Book(data)
          })}
      </div>
      <center><h1>Top Selling Album Section</h1></center>
      <Album id = '2'/>
      </div>
    )
}


ReactDOM.render( <BookList/>,
  document.getElementById('root')
);
