import {Container, Button, TextField, List, ListItem, Divider } from '@material-ui/core';
import {Component} from 'react'
import './App.css';


class App extends Component{

  componentDidMount(){
    document.title = "To Do"
  }

  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

render(){
  return(

    

    <div className="App">
      <Container maxWidth="sm">
        
      
       <header className="App-header">
         
         <h1 className = "Page-Title"> To Do </h1>
       </header>

       <div className = "Input-Container">
         
       
           
           <TextField id="new-todo" onChange={this.handleChange} value={this.state.text}  fullWidth margin="normal"/>
            <Button variant="contained" color="primary" onClick = {this.handleSubmit}>Add</Button>
                    
        </div>
                    
       <List>
       {this.state.items.map(item => (
              <ListItem key={item.id}>{item.text}</ListItem> 
       ))}
       </List>

       </Container>
     </div>

  );
}


}

export default App;
