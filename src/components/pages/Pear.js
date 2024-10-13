import React from 'react';
import './Pear.css';

function Pear() {
  return (
    <div className="pear-container">
      <h1>Top Pear Producing Countries</h1>
      <table className="pear-table">
        <thead>
          <tr>
            <th>Country</th>
            <th>2019 (tons)</th>
            <th>2018 (tons)</th>
            <th>2017 (tons)</th>
            <th>2016 (tons)</th>
            <th>2015 (tons)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>China</td>
            <td>18,978,144</td>
            <td>17,916,750</td>
            <td>17,404,532</td>
            <td>16,196,649</td>
            <td>16,527,694</td>
          </tr>
          <tr>
            <td>United States</td>
            <td>636,390</td>
            <td>595,110</td>
            <td>648,637</td>
            <td>730,740</td>
            <td>669,000</td>
          </tr>
          <tr>
            <td>Argentina</td>
            <td>634,000</td>
            <td>659,000</td>
            <td>594,143</td>
            <td>565,697</td>
            <td>517,754</td>
          </tr>
        </tbody>
      </table>
      <div className="pear-image-container">
        <img src="images/img-19.jpg" alt="Pears" className="pear-image" />
      </div>
    </div>
  );
}

export default Pear;
