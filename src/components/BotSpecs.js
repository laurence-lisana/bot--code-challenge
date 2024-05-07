import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

const BotSpecs = ({ bot, back, enlist }) => {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          
          <div className="four wide column">
            <img
              alt="Bot Avatar"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          
          <div className="four wide column">
            
            <h2>Name: {bot.name}</h2>
            
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                   
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="ui button fluid" onClick={back}>
              Go Back
            </button>
            
            <button className="ui button fluid" onClick={() => enlist(bot)}>
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
