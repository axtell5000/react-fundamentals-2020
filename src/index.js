import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const title = 'Gideon the Ninth (The Locked Tomb Trilogy, 1)';
const author = 'Tamsyn Muir';
const image = 'https://images-na.ssl-images-amazon.com/images/I/61D4TGMD4fL._AC_UL320_SR214,320_.jpg';

const secondBook = {
  title: 'The Rage of Dragons (The Burning (1))',
  author: 'Evan Winter',
  image: 'https://images-na.ssl-images-amazon.com/images/I/511Y+VFzgoL._SX322_BO1,204,203,200_.jpg'
}


function BookList() {
  return (
    <section className="booklist">
      <Book img={image} title={title} author={author} />
      <Book img={secondBook.image} title={secondBook.title} author={secondBook.author}/>
      <Book>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia quae fugiat reprehenderit iusto. Adipisci provident, minus nisi vitae eius voluptatum molestiae aperiam consectetur placeat.</p>
      </Book>
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children} = props;
  return (
    <article className="book">
      <img src={img} alt={title}/>
      <h1>{title}</h1>
      <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>
      { children }
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
