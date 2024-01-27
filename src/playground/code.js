class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteAll=this.handleDeleteAll.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleDeleteSingle=this.handleDeleteSingle.bind(this);
        this.state={
            array: []
        }
    }

    componentDidMount(){
        try{
            const value=localStorage.getItem("option");
            const json=JSON.parse(value);
            if(json){
                this.setState(()=>({array: json}))
            }
        }catch(e){
        //do nothing
        }
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.array.length !== this.state.array.length){
            const json= JSON.stringify(this.state.array);
            const option= localStorage.setItem("option",json);
        }
    }
    handleAddOption(arr){
        if(!arr){
            return "Enter a valid option";
        }else if(this.state.array.indexOf(arr) > -1){
            return "This already exists";
        }
        this.setState((prevState)=> ({
            array : prevState.array.concat(arr)
            
        })
        )
    }
    handleDeleteAll(){
        this.setState(() => ({
            array:[]
        })
        )
    }
    handleDeleteSingle(optionToRemove){
        this.setState((prevState)=>({
            array : prevState.array.filter((option)=>{
                return optionToRemove !== option;
                // return false;
                }
            )
        }))
    }
    handlePick(){
        const chooseOption= Math.floor(Math.random()* this.state.array.length)
        alert(this.state.array[chooseOption])
    }
    render(){
        const title="Indecision App";
        const subtitle= "Put your life in the hands of a computer"
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOption={this.state.array.length>0} 
                    handlePick={this.handlePick} />
                <Options 
                    options={this.state.array} 
                    handleDeleteAll={this.handleDeleteAll}
                    handleDeleteSingle={this.handleDeleteSingle}/>

                <AddOption hasAddedOption={this.handleAddOption}/>    
            </div>
        )
    }
}

const Header =(props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}
const Action =(props) =>{
    return(
        <div>
        <button onClick={props.handlePick} disabled={!props.hasOption}>What Should I Do?</button>
        </div>
    )
}
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const input= e.target.elements.option.value.trim();
        const error=this.props.hasAddedOption(input);
        
        this.setState((prevState)=>{
            return{
                error 
            } 
        } )
        if(!error){
            e.target.elements.option.value='';
        }
       
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" placeholder="Add Option!" name="option">
                </input>
                <button>Add</button>
                </form>
            </div>
        )
    }
}

const Options = (props) => {
    return(
        <div>
        {props.options.length ===0 && <p>Add option to get started!</p>}
        <button onClick={props.handleDeleteAll}>Remove All</button>
            {props.options.map((option) => (
                <Option key={option} 
                    optionText={option}
                    hasDeleteSingle={props.handleDeleteSingle} />) )}
        </div>
    )
}

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button onClick={(e) =>{
                props.hasDeleteSingle(props.optionText)}}
            >Remove</button>
        </div>
    )
}

ReactDOM.render(<IndecisionApp /> , document.getElementById("app"));