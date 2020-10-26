import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const books = [{ id: 1, title: 'Gideon the Ninth (The Locked Tomb Trilogy, 1)',author: 'Tamsyn Muir', image: 'https://images-na.ssl-images-amazon.com/images/I/61D4TGMD4fL._AC_UL320_SR214,320_.jpg'}, { id:2, title: 'The Rage of Dragons (The Burning (1))', author: 'Evan Winter', image: 'https://images-na.ssl-images-amazon.com/images/I/511Y+VFzgoL._SX322_BO1,204,203,200_.jpg'
}];


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

const Book = (props) => {
  const { image, title, author} = props;

  const clickHandler = () => {
    alert('Whats cracking');
  };

  const clickComplex = (author) => {
    alert(author);
  }

  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={image} alt={title}/>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>
      <button type="button" onClick={clickHandler} title="Click me">Click me</button>
      {/* if need to pass values have to do it this way */}
      <button type="button" onClick={() => clickComplex(author)}>more complex button</button>
    </article>
  )
};

// const Image = () => <img src={props.image} alt={title}/>;

// const Title = () => <h1>{title}</h1>;


// // Curly braces in JSX menas back into JavaScript
// const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>;

// const Person = () => <h4>Hello my name is Stephen</h4>;
// const Message = () => {
//   return <p>zoiks</p>;
// }

ReactDom.render(<BookList />, document.getElementById('root'));
