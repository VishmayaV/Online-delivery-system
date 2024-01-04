// Banner
import React from 'react';
import './Banner.css';

export default function Banner() {
  const handleButtonClick = () => {
    const productsElement = document.getElementById('products');
    if (productsElement) {
      window.scrollTo({
        top: productsElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h3>
          fresh and
          {' '}
          <span>organic</span>
          {' '}
          products
        </h3>
        <button type="button" className="btn" onClick={handleButtonClick}>
          shop now
        </button>
      </div>
    </section>
  );
}
