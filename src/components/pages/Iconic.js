import React from 'react';
import './Iconic.css';
import bodosImage from '../../images/bodos.jpg'; 

function Iconic() {
  return (
    <div className="iconic-container">
      <h1>Bodo’s Bagels</h1>
      <img 
        src={bodosImage} 
        alt="Bodo's Bagels" 
        className="iconic-image"
      />
      <p className="iconic-review">
        Bodo’s Bagels is a beloved Charlottesville staple, famous for 
        its incredibly fresh, hand-rolled bagels. Despite the constantly 
        bustling lines, the friendly staff and quick service ensure you’re 
        never waiting for long. With flavors ranging from plain and 
        everything bagels to an array of cream cheese spreads, breakfast 
        sandwiches, and deli options, there’s something for everyone. 
        Affordable prices, quality ingredients, and consistently delicious 
        results make Bodo’s a local favorite that lives up to its iconic reputation.
      </p>
    </div>
  );
}

export default Iconic;
