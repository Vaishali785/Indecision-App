class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this) ;
        this.handleDeleteOption = this.handleDeleteOption.bind(this) ;
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state={
            options : []
        };
    } 

    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            console.log("component mounted");
            if(options){
                this.setState (() => ({options}) );
            }
        }catch(e){
            //do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options);
            localStorage.setItem("options" , json);
        }
    }
    componentWillUnmount() {
        console.log("okay")
    };
    handleDeleteAll(){
        this.setState(() => ({ options : [] }) )
    };

    handleDeleteOption(optionToRemove){
        this.setState( (prevState) => ({
            options: prevState.options.filter( (option) => {
                return optionToRemove !== option;
            })
        }))
    };
    handlePick(){
        const pickedIndex = Math.floor(Math.random() * this.state.options.length) ;
        alert(this.state.options[pickedIndex]) ;
    }

    handleAddOption(option){
        if(!option){
            return "Enter valid option";
        }else if( this.state.options.indexOf(option) > -1){
            return "Option already exists"
        }
        // console.log(option)
        this.setState((prevState) => ({ options : prevState.options.concat(option) }) )
    }

    render(){
        //const title= "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions= {this.state.options.length > 0} 
                    hasPicked={this.handlePick}/>
                <Options 
                    options={this.state.options} 
                    hasDeleteOption = {this.handleDeleteOption}
                    hasDeleteAll={this.handleDeleteAll}/>
                <AddOptions hasAddedOption={this.handleAddOption}/>
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
        )
};

Header.defaultProps = {
    title : "Indecision"
}

const Action = (props) => {
    return(
        <div>
            <button 
                onClick={props.hasPicked} 
                disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    )
}; 

const Options = (props) => {
    return (
        <div>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <button onClick={props.hasDeleteAll}>
                Remove All
            </button>
            {props.options.map( (option) => (
                <Option 
                    key={option} 
                    optionText={option}
                    deleteOption= {props.hasDeleteOption} />)
                )}  
        </div>
    )
};


const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button onClick ={(e) => {  
                props.deleteOption(props.optionText)
                }}> 
                Remove 
            </button>
         
        </div>
    )
};


class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption =this.handleAddOption.bind(this);
        this.state={
            error : undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim() ;
        const error =  this.props.hasAddedOption(option);
        
        this.setState(() => ({ error }) )      //shorthand of error : error 
        // })
        if(!error){
            e.target.elements.option.value='';
        }
    }
    render(){
        return(
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
            </form>
        </div>
    )
    }
}

const appRoot= document.getElementById("app");
ReactDOM.render(<IndecisionApp options={["one","two"]}/>,appRoot);