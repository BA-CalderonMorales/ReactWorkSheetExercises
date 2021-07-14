let rand_num = Math.floor(Math.random() * 11)


const JokesGenerator = (props) => {
    let specific_joke = [];
    const jokes = props.theJokes;
    if (jokes == null && jokes.length === 0) {
        return null;
    }
    else {
        console.log('Here are the jokes');
        console.log(jokes);
        for (let index = 0; index < jokes.length; index++)
        {
            if (jokes[index].setup === jokes[rand_num].setup) {
                specific_joke = jokes[index];
            }
        }
    }
    return (
        <div className="row row-cols-1 row-cols-xs-12 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 d-flex justify-content-center">
            <div className="col"></div>
            <div className="col text-center">
                <h1 className="display-5">Here's a quick joke</h1>
                <h4>{specific_joke.setup}</h4>
                <h5 className="text-muted">{specific_joke.punchline}</h5>
            </div>
            <div className="col"></div>
        </div>
    );
}

export default JokesGenerator;

/* 
    Here, props is taking in an array and outputting a list of names 
    contained in that array that was passed in through props from 
    the Parent app.jsx file.

    <h1 className="display-4">Jokes Generator</h1>
    <ol className="list-group list-group-flush">
        <li className="list-group-item">And here it is</li>
        <li className="list-group-item text-muted">
            
        </li>
    </ol>

    {props.names.map((a_name) => {
        return (
        <li className="list-group-item text-muted">{a_name}</li>
        );
    })}
*/