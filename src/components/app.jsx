import React, { Component } from 'react';
import Title from './Title/title';
import ListOfNames from './ListOfNames/listOfNames';
import AlertUser from './AlertUser/alertUser';
import SuperHeroTable from './SuperHeroTable/superHeroTable';

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
            ]
        }
    }

    componentDidMount = () => {
        this.setName();
    }

    setName = () => {
        this.setState({
            firstName: 'Reggie',
            lastName: 'White'
        });
    }

    alertingTheUser = () => {
        alert('devCodeCamp');
    }

    render = () => {
        return ( 
            <div className="container-fluid">
                <Title firstName={this.state.firstName} lastName={this.state.lastName} />
                <ListOfNames names={this.state.listOfNames} />
                <AlertUser onClick={this.state.alertUser} />
                <SuperHeroTable heroes={this.state.superheroes}/>
            </div>
        );
    }
}
 
export default App;