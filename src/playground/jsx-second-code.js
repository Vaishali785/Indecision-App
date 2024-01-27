class Header extends React.Component{
    render(){
        return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>
        )
    }
}


class Action extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.hasPicked} disabled={!this.props.hasOptions}>
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
       return (
           <div>
               <button onClick={props.hasDeleteAll}>Remove All</button>
               {props.options.map( (option) => <Option key={option} optionText={option}/>)}  
           </div>
       )
   }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {props.optionText}
            </div>
        )
}}