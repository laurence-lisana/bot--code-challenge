import React, { Component } from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends Component {
  state = {
    botCollection: [],
    botArmy: [],
    collectionVisible: true,
    botSpecs: {},
  };

  componentDidMount() {
    this.fetchBots();
  }

  fetchBots = () => {
    fetch("http://localhost:6001/bots")
      .then(response => response.json())
      .then(bots => {
        this.setState({
          botCollection: bots,
          collectionVisible: true
        });
        alert("Botts loading!");
      });
  }

  addToArmy = (bot) => {
    const newCollection = this.state.botCollection.filter(
      card => card.bot_class !== bot.bot_class
    );
    this.setState({
      botCollection: newCollection,
      botArmy: [...this.state.botArmy, bot]
    });
  };

  removeFromArmy = (bot) => {
    const newArmy = this.state.botArmy.filter(card => card.id !== bot.id);
    this.setState({ botArmy: newArmy });
  };

  removeBotPermanently = (bot) => {
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(result => {
        alert(JSON.stringify(result));
        this.fetchBots();
      });
  };

  displayBotSpecs = (bot) => {
    this.setState({ collectionVisible: false, botSpecs: bot });
  };

  displayBotCollection = () => {
    this.setState({ collectionVisible: true });
  };

  render() {
    const { botCollection, botArmy, botSpecs, collectionVisible } =
      this.state;

    return (
      <div>
        <BotArmy
          bots={botArmy}
          action={this.removeFromArmy}
          removeCard={this.removeBotPermanently}
        />
        {collectionVisible ? (
          <BotCollection
            botCollection={botCollection}
            action={this.displayBotSpecs}
            removeCard={this.removeBotPermanently}
          />
        ) : (
          <BotSpecs
            bot={botSpecs}
            back={this.displayBotCollection}
            enlist={this.addToArmy}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
