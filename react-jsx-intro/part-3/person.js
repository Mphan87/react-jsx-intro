function Person(props) {


    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {props.name}</li>
          <li>Age: {props.age}</li>
          <ul>
            Hobbies
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
          </ul>
        </ul>
        <h3>{props.age >= 18 ? "Go vote!" : "Go study!"}</h3>
      </div>
    );
  }
  