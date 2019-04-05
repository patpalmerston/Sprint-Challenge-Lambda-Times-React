import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((cards, index) => {
            console.log(props.cards)
            return <Card 
                      card={cards} 
                      key={index} 
                    />
          })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      headline: PropTypes.string,
      img: PropTypes.img,
      tab: PropTypes.string
    })
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;