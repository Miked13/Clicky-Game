import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import heroes from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.heroes to the cards json array
  state = {
    heroes,
    clickedIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the cards when clicked
  shuffleScoreCard = id => {
    let clickedIds = this.state.clickedIds;

    if (clickedIds.includes(id)) {
      this.setState({ clickedIds: [], score: 0, status: "Game Over! You lost! Try again!" });
      return;
    } else {
      clickedIds.push(id)

      if (clickedIds.length === 8) {
        this.setState({ score: 8, status: "Congratulations! You won!", clickedIds: [] });
        console.log('You Win');
        return;
      }

      this.setState({ heroes, clickedIds, score: clickedIds.length, status: " " });

      for (let i = heroes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [heroes[i], heroes[j]] = [heroes[j], heroes[i]];
      }
    }
  }

  // Render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header text-center text-red">
          <h1 className="App-title">Clicking Game: Marvel Edition</h1>
          <p className="App-intro">
            Avoid clicking the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
          goal={8}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.heroes.map(marvelheroes => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={marvelheroes.id}
              key={marvelheroes.id}
              image={marvelheroes.image}
            />
          ))}
        </Wrapper>
        <footer>
          <div className="copyright py-4 text-center">
            <div className="container">
            <small>Copyright &copy; Mike Diallo 2019</small>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
