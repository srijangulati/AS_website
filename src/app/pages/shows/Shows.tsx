import React from 'react';
import './Shows.scss';

function Shows() {
  return (
    <div className="show-container">
      <div className="header">Shows</div>
      <div className="show-container-content">
        <div className="slider">
            <div className="card-container">
              <img src="https://picsum.photos/200/300" alt="" className="card-image"/>
              <div className="card-header"> Truffles </div>
              <div className="card-description"> get free trufles on 24//12/2021</div>
            </div>
        </div>
        <div className="slider">
            <div className="card-container">
              <img src="https://picsum.photos/200/300" alt="" className="card-image"/>
              <div className="card-header"> Truffles </div>
              <div className="card-description"> get free trufles on 24//12/2021</div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Shows;