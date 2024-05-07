import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

const BotCard = ({ bot, action, removeCard }) => {
  const handleClick = () => {
    alert("Botts cards pressed!");
    action(bot);
  };

  const handleDischarge = (e) => {
    alert("Bot Removed!");
    e.stopPropagation();
    removeCard(bot);
  };

  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={handleClick}>
        <div className="image">
          <img alt="Bot Avatar" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.capabilities}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damages}
          </span>
          <span>
            <i className="icon shield" />
            {bot.strength}
          </span>
          <span>
            <div className="ui center aligned segment basic">

              <button
                className="ui mini purple button"
                onClick={handleDischarge}
              >
                remove Bot
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
