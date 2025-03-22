import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import co from './cookiesdata'; // Adjust the path as necessary
import './productpage.css'; // Use the same CSS for consistency
import { useCart } from './CartContent'; // Adjust the path as necessary

const Cookiespage = () => {
  const { id } = useParams();
  const product = co.find((product) => product.id.toString() === id);
  const [activeSection, setActiveSection] = useState('description'); // Default to 'description'

  const { addToCart } = useCart(); // Import the useCart hook

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleOrderNow = () => {
    // Add the product to the cart
    addToCart(product);
    console.log(`Order placed for ${product.name}`);
  };

  return (
    <div className="product-page">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details-container">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">Rs. {product.new_price}</p>
        <button className="order-button" onClick={handleOrderNow}>
          Add To Cart
        </button>
        <div className="sections">
          <div
            onClick={() => handleSectionClick('description')}
            className={`section-title ${activeSection === 'description' ? 'active' : ''}`}
          >
            Description
          </div>
          {activeSection === 'description' && (
            <div className="section-content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
          )}
          <div
            onClick={() => handleSectionClick('details')}
            className={`section-title ${activeSection === 'details' ? 'active' : ''}`}
          >
            Details
          </div>
          {activeSection === 'details' && <div className="section-content">{product.details}</div>}
          <div
            onClick={() => handleSectionClick('ingredients')}
            className={`section-title ${activeSection === 'ingredients' ? 'active' : ''}`}
          >
            Ingredients
          </div>
          {activeSection === 'ingredients' && <div className="section-content">{product.ingredients}</div>}
          <div
            onClick={() => handleSectionClick('reviews')}
            className={`section-title ${activeSection === 'reviews' ? 'active' : ''}`}
          >
            Reviews
          </div>
          {activeSection === 'reviews' && <div className="section-content">{product.reviews}</div>}
        </div>
      </div>
    </div>
  );
};

export default Cookiespage;
