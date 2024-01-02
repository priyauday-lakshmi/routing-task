import React from 'react';

function Header() {
  const imageStyle = {
    filter: 'sepia(100%) hue-rotate(200deg) saturate(1000%)', 
  };

  return (
    <>
      <div className='container'>
        <img
          src='/Images/blog-header-2048x315.png'
          className='my-3 img-fluid'
          style={imageStyle}
          alt='Header Image'
        />
      </div>
    </>
  );
}

export default Header;
