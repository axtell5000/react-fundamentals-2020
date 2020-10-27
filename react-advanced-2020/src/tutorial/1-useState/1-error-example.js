import React, {Fragment} from 'react';

const ErrorExample = () => {
  let title = 'A super omega title';
  const handleClick = () => {
    title = 'hello there';
  };

  return (
    <Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>Change Title</button>
    </Fragment>
  );
};

export default ErrorExample;
