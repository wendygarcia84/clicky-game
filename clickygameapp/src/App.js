import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json"

let guesses = [];

class App extends Component {

    state ={
        pictures,
        score: 0
    }

    componentDidMount () {
        this.setState({pictures})
    }

    guessedPicture = id => {
        console.log("This id", id);
        console.log("guesses", guesses)
        // Filter this.state.friends for friends with an id not equal to the id being removed
        // Set this.state.friends equal to the new friends array
        this.shuffle();
       if (guesses.includes(id)) {
           //reset game
           this.setState({score: 0})
       } else {
           //increment score
           this.setState({score: this.state.score + 1})
           guesses.push(id);
       }
        
    };

    shuffle = () => {
            let randomPictures = this.state.pictures;
            console.log("RANDOMIZING PICTURES", randomPictures)
            let currentIndex = randomPictures.length, temporaryValue, randomIndex;
        
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = randomPictures[currentIndex];
            randomPictures[currentIndex] = randomPictures[randomIndex];
            randomPictures[randomIndex] = temporaryValue;
            }
        
            this.setState({pictures: randomPictures})
            console.log("Pictures randomized: ", randomPictures)
        }
      

    render() {
        console.log(pictures);
        return (
            <Wrapper>
            <h1>Score: {this.state.score}</h1>
            {this.state.pictures.map(picture => {
                return <ImgCard 
                name={picture.name} 
                image={picture.image} 
                id={picture.id}
                key={picture.id}
                guessedPicture={this.guessedPicture}/>
            })}
            </Wrapper>
        )
    }
}

export default App;