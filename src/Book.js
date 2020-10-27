import React from 'react';

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

export default Book;
