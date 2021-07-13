import React from 'react';

const AlertUser = (props) => {
    return (
        <React.Fragment>
            <h1 className="display-5 text-center">A Button</h1>
            <div className="row row-cols-1 row-cols-xs-12 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 d-flex justify-content-center">
            <div className="col"></div>
            <div className="col d-flex justify-content-center">
                <button type="button" value="Click Me"
                onClick={props.onClick}>Click Me</button>
            </div>
            <div className="col"></div>
            </div>
        </React.Fragment>
    );
}

export default AlertUser;