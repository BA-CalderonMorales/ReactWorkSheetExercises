import React from 'react';

const SuperHeroTable = (props) => {
    return (
        <React.Fragment>
        <h1 className="display-5 text-center">Super Hero Table</h1>
        <div className="row row-cols-1 row-cols-xs-12 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 d-flex justify-content-center">
            <div className="col"></div>
            <div className="col d-flex justify-content-center">
                <div className="table-responsive">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Heroes</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            props.heroes.map((key) => {
                                return (
                                    <tr key={key.superheroId}>
                                        <td className="text-muted">{key.name}</td>
                                        <td>{key.primaryAbility}</td>
                                        <td>{key.secondaryAbility}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col"></div>
        </div>
        </React.Fragment>
    );
}


export default SuperHeroTable;