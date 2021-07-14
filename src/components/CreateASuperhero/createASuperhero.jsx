import React, { Component } from 'react';

class CreateASuperhero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handles the button functionality - START
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.name);
    }

    handleSubmit = (event) => {
        console.log(event.target.value);
        event.preventDefault();
        this.props.settingTheHeroArray(this.state); // Passes the new guitar name back to the Parent component
        console.log('Hero Name: ', this.state.heroName);
    }
    // Handles the button functionality - END

    render() { 
        return ( 
            <React.Fragment>
                <div className="row row-cols-1 row-cols-xs-12 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 d-flex justify-content-center">
                    <div className="col text-center">
                        <h1 className="display-5">Creating a hero</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label>Hero Name</label>
                            <input name='name' onChange={this.handleChange} value={this.onChange}></input>
                            <label>Primary Ability</label>
                            <input name='primaryAbility' onChange={this.handleChange} value={this.onChange}></input>
                            <label>Secondary Ability</label>
                            <input name='secondaryAbility' onChange={this.handleChange} value={this.onChange}></input>                        
                            <button type="submit">Create A Hero</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default CreateASuperhero;