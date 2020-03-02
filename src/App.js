import React, { Component } from "react";
import badges from "./badges.json";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import BadgeCard from "./components/BadgeCard";

class App extends Component {
  state = {
    badges,
    count: 0,
    clicked: [],
    topScore: 0,
    info: "Click on an image to begin!"
  };

  handleClick = id => {
    //check if clickedBadge was already clicked
    const checkArray = this.state.clicked.filter(click => click.id === id);
    if (checkArray.length === 0) {
      if (this.state.topScore === this.state.count) {
        this.setState({ topScore: this.state.topScore + 1 });
      }
      //increase score & update game info
      this.setState({
        count: this.state.count + 1,
        info: "Great Job! You guessed right!"
      });
      //add clicked item to clicked state array
      this.setState(state => {
        const clicked = state.clicked.push(this.state.badges[id - 1]);
        return clicked;
      });
      console.log("items that have been clicked: ", this.state.clicked);
    } else {
      this.setState({
        info: "Wrong! Try again.",
        count: 0,
        clicked: []
      });
    }

    //reshuffle cards in DOM
    // let ctr = this.state.badges.length;
    // let temp;
    // let index;
    // const badges = this.state.badges;
    // while (ctr > 0) {
    //   index = Math.floor(Math.random() * ctr);
    //   ctr--;
    //   temp = badges[ctr];
    //   badges[ctr] = badges[index];
    //   badges[index] = temp;
    // }
    // this.setState(badges);
  };

  render() {
    return (
      <>
        <Nav
          info={this.state.info}
          count={this.state.count}
          topScore={this.state.topScore}
        />
        <Header />
        <Wrapper>
          {this.state.badges.map(badge => (
            <BadgeCard
              key={badge.id}
              name={badge.name}
              image={badge.image}
              handleClick={() => this.handleClick(badge.id)}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
