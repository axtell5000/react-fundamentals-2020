import React from 'react';
import ReactDom from 'react-dom';

// css
import './index.css';

// data
import { books } from './books';

// components
import Book from './Book';

function BookList() {
  return (
    <section className="booklist">
      { books.map( book => {        
        return (
          // using spread operator
          <Book {...book} key={book.id}>
          </Book>
        )
      })}
    </section>
  );
}



// const Image = () => <img src={props.image} alt={title}/>;

// const Title = () => <h1>{title}</h1>;


// // Curly braces in JSX menas back into JavaScript
// const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>;

// const Person = () => <h4>Hello my name is Stephen</h4>;
// const Message = () => {
//   return <p>zoiks</p>;
// }

ReactDom.render(<BookList />, document.getElementById('root'));
