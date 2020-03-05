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

  shuffle = arr => {
    let arr2 = [...arr];
    let i = arr2.length;
    let temp;
    let index;
    while (i > 0) {
      index = Math.floor(Math.random() * i);
      i--;
      temp = arr2[i];
      arr2[i] = arr2[index];
      arr2[index] = temp;
    }
    return arr2;
  };

  handleClick = id => {
    console.log("this.state.clicked", this.state.clicked);
    //check if item was already clicked
    const checkArray = this.state.clicked.filter(click => click === id);
    console.log("checkArray", checkArray);
    //if item was not already clicked
    if (checkArray.length === 0) {
      //change topScore when equal to socre
      if (this.state.topScore === this.state.count) {
        this.setState({ topScore: this.state.topScore + 1 });
      }
      //increase score & update game info
      this.setState({
        count: this.state.count + 1,
        info: "Great Job! You guessed right!"
      });
      //add item to this.state.clicked array
      this.setState(state => {
        const clicked = state.clicked.push(id);
        // return clicked;
      });
      // console.log("items that have been clicked: ", this.state.clicked);
    } else {
      this.setState({
        info: "Wrong! Try again.",
        count: 0,
        clicked: []
      });
    }

    //reshuffle cards in DOM
    const stickers = this.state.badges;
    console.log("stickers", stickers);
    const shuffledBadges = this.shuffle(stickers);
    console.log("shuffledBadges", shuffledBadges);
    console.log("===============");
    this.setState({ badges: shuffledBadges });
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
