import React from 'react';

const ListOfNames = (props) => {
    return (
        <div className="row row-cols-1 row-cols-xs-12 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 d-flex justify-content-center">
            <div className="col"></div>
            <div className="col text-center">
                <div>
                    <h1 className="display-4">A list of Names</h1>
                    <ol className="list-group list-group-flush">
                        {/* 
                            Here, props is taking in an array and outputting a list of names 
                            contained in that array that was passed in through props from 
                            the Parent app.jsx file.
                        */}
                        {props.names.map((a_name) => {
                            return (
                            <li className="list-group-item text-muted">{a_name}</li>
                            );
                        })}
                    </ol>
                </div>
            </div>
            <div className="col"></div>
        </div>
    );
}

export default ListOfNames;