import React from 'react';

const Title = (props) => {
    return (
        <div className="row row-cols-1 row-cols-xs-12 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 d-flex justify-content-center">
            <div className="col"></div>
            <div className="col text-center">
                <div>
                    <h1 className="display-4">A Title</h1>
                    <h1 className="text-muted">{props.firstName} {props.lastName}</h1>
                </div>
            </div>
            <div className="col"></div>
        </div>
    );
}

export default Title;