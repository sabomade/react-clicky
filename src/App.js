import React, { Component } from "react";
import badges from "./badges.json";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import BadgeCard from "./components/BadgeCard";

class App extends Component {
  state = {
    badges
  };

  shuffleBadges = id => {
    const badges = this.state.badges.filter(badge => badge.id !== id);
    this.setState({ badges });
  };

  render() {
    return (
      <>
        <Nav />
        <Header />
        <Wrapper>
          {this.state.badges.map(badge => (
            <BadgeCard
              id={badge.id}
              key={badge.id}
              name={badge.name}
              image={badge.image}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
