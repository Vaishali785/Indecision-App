
//JSX = Javascript XML(not part of JS but is an extension of JS)
const appRoot=document.getElementById("app");

let app= {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit= (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    //console.log(option);
    if (option ){
        app.options.push(option);
       // console.log("yes");
        render();
        e.target.elements.option.value='';
    }
}

const onRemoveAll= () => {
    app.options=[];
    render();
}

const onMakeDecision = () => {
    const randomNumber=Math.floor(Math.random()*app.options.length);
    const selectedOption = app.options[randomNumber];
    alert(selectedOption); 
};

const render= () =>{
let template= (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {/* <p>{app.options.length}</p> */}
        <p>{(app.options.length > 0) ? "Here are your options" : "No option available"}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
        {
            app.options.map((num) => {
                return <li key={num}>{num}</li>
            })
        }
        </ol>
        {/* <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol> */}
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add option</button>
        </form>
    </div>
);
ReactDOM.render(template,appRoot);
};

render();

// let user={
    //     name: "Vaishali",
    //     age: 20,
    //     location: "USA"
    // };
    
    // function getLocation(location){
    //     if(location){
    //         return <p>Location: {location}</p>;
    //     }
    // }
    
    // let templateTwo=(
    //         <div>
    //             <h1>{user.name ? user.name : "Anonymous"}</h1>
    //             {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
    //             {4<5 && <p>v="yo"</p>}
    //            {/* {null} */}
    //              {/* {undefined} */}
    //             {getLocation(user.location)}
    //         </div>
    // );
