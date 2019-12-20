import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    friends: friends,
    score: 0,
    message: "Can you remember?"
  };
  charClicked = (id, clicked) => {
    console.log(id)
    console.log(clicked)
    console.log(this.state.message)
    if (clicked){
      this.setState({
        score: 0,
        message: "Game Over!"
      })
      friends.forEach(function(friend) {
        friend.clicked = false;
      })
      friends.sort(function(a, b){return 0.5 - Math.random()})
    }
    else{
      friends.forEach(function(friend) {
        if (friend.id === id) {
          friend.clicked = true;
        }
      })
      this.setState({
        score: this.state.score + 1,
        message: ""  
      }, () => {
        if(this.state.score === 9){
          friends.forEach(function(friend) {
            friend.clicked = false;
          })
          this.setState({
            score: 0,
            message: "You win!"
          })
        }
      })
      friends.sort(function(a, b){return 0.5 - Math.random()})
    }
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score = {this.state.score} message = {this.state.message}>Friends List</Title>
        
        <div className="container">
          <div className="row">
            {this.state.friends.map(friend => (
              <div className="col-4">
              <FriendCard
                click={this.charClicked}
                id={friend.id}
                clickOrNot ={() => this.charClicked(this.state.clicked)}
                image={friend.image}
                clicked={() => this.charClicked(friend.id, friend.clicked)}
              />
              </div>
            ))}
        </div>
      </div>
      </Wrapper>
    );
  }
}

export default App;
