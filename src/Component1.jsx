function Component1(props) {
    console.log(props);
    
    // const name = props["name"];
    // const age = props["age"];

    const {name, age} = props;

    return (
        <div>Component1 - {name} : {age}</div>
    )
}

export default Component1