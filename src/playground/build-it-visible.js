class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
        this.state = {
            visibility : false
        }
    };

    handleToggleVisibilty(){
        this.setState ( (prevState) => {
            return{
                visibility : !prevState.visibility 
            } ;
        });
        
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibilty}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && (<div><p>Hey there</p></div>)}
            </div>
        )
        }
    }

ReactDOM.render( <VisibilityToggle /> , document.getElementById("app"));







// const appRoot= document.getElementById("app");
// let visibility = false;

// const showDetails= () => {
//     visibility = !visibility;
//     render();
// };

// const render= () =>{
//     const template=(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button id="btn" onClick={showDetails}>
//                 {visibility ? "Hide Details" : "Show Details"}
//             </button>
//             {visibility && (
//             <div>
//                 <p>Hey. These are some details.</p>
//             </div>
//             )}
//         </div>
//     );
    
//     ReactDOM.render(template,appRoot);
// };

// render();
