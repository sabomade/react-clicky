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
    clicked: []
  };

  handleClick = id => {
    //get badge obj that was clicked
    const justClicked = this.state.badges[id - 1];

    //check if clickedBadge was already clicked
    const checkArray = this.state.clicked.filter(click => click.id === id);
    if (checkArray.length === 0) {
      //increase score
      this.setState({ count: this.state.count + 1 });
    }

    //add clicked item to clicked state array
    this.setState(state => {
      const clicked = state.clicked.push(justClicked);
      return clicked;
    });

    //reshuffle cards in DOM
  };

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    return (
      <>
        <Nav count={this.state.count} />
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
