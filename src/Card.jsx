import React from 'react';

function Card(props){
    return(
      <>
      <div className="cards">
      <div className="card">
        <img src={props.cardImge} alt="mypic" className="cardImage"/>
        <div>
    <span className="cardCategory">{props.tilte}</span>
          <h3 className="cardTitle">{props.seriesName}</h3>
          <a href={props.link} target="_blank"  rel="noopener noreferrer">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>
    )
  };

  export default Card;