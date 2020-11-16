import React from 'react';
import { useFetch } from './2-useFetch';
const url = 'https://course-api.netlify.app/api/javascript-store-products';

// Big gotcha - when creating custom hooks, you HAVE to start the function name with 'use' or else it will cause an error
const Example = () => {
  const {loading, products} = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;
