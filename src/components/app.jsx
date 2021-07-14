import React, { Component } from 'react';
import Title from './Title/title';
import ListOfNames from './ListOfNames/listOfNames';
import AlertUser from './AlertUser/alertUser';
import SuperHeroTable from './SuperHeroTable/superHeroTable';
import CreateASuperhero from './CreateASuperhero/createASuperhero';
import JokesGenerator from './JokesGenerator/jokesGenerator';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '', // Variable
            lastName: '', // Variable
            listOfNames: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie'], // Array
            alertUser: this.alertingTheUser,
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ],
            theJokes: []
        }
    }

    componentDidMount = () => {
        this.setName();
        this.setJoke();
    }

    setName = () => {
        this.setState({
            firstName: 'Reggie',
            lastName: 'White'
        });
    }

    setJoke = () => {
        axios.get('https://official-joke-api.appspot.com/jokes/ten').then(response => {
            const jokes = response.data;
            // console.log(jokes); display all the data inside of the JSON file
            this.setState({theJokes: jokes});
        });
    }

    alertingTheUser = () => {
        alert('devCodeCamp');
    }

    settingTheHeroArray = (newHero) => {
        let tempHeroArray = this.state.superheroes;
        newHero.superheroId = this.state.superheroes.length + 1;
        tempHeroArray.push(newHero);
        this.setState({
            superHeroes: tempHeroArray
        })
    }

    render = () => {
        return ( 
            <div className="container-fluid">
                <Title firstName={this.state.firstName} lastName={this.state.lastName} />
                <hr/>
                <ListOfNames names={this.state.listOfNames} />
                <hr/>
                <JokesGenerator theJokes={this.state.theJokes} />
                <hr/>
                <AlertUser onClick={this.state.alertUser} />
                <hr/>
                <SuperHeroTable heroes={this.state.superheroes}/>
                <hr/>
                <CreateASuperhero settingTheHeroArray={this.settingTheHeroArray}/>
            </div>
        );
    }
}
 
export default App;