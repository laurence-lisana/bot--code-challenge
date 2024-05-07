import React from 'react';
import BotCard from "../components/BotCard";

const BotCollection = ({ botCollection, action, removeCard }) => {
  const displayBotCards = botCollection.map(bot => (
    <div className="four wide column" key={bot.id}>
      <div className="ui segment">
        <BotCard bot={bot} action={action} removeCard={removeCard} />
      </div>
    </div>
  ));

  return (
    <div className="ui grid">
      <div className="row bot-army-row">
        {displayBotCards.length > 0 ? (
          displayBotCards
        ) : (
          <div className="ui message">No Bot assingned nothing to display!</div>
        )}
      </div>
    </div>
  );
};

export default BotCollection;
