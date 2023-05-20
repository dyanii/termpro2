import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import { Paper, List, Container } from "@material-ui/core";
import './App.css';
import { call } from "./service/ApiService";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items :[],
    };
  }

  componentDidMount() {
    call("/book", "GET", null).then((response)=>
      this.setState({items: response.data}));
  }

  add = (item) => {
    call("/book", "POST", item).then((response)=>
      this.setState({items: response.data}));
  };

  delete = (item) => {
    call("/book", "DELETE", item).then((response)=>
      this.setState({items: response.data}));
  };

  update = (item) => {
    call("/book", "PUT", item).then((response) =>
      this.setState({items: response.data}));
  };

  search = (item) => {
    call("/book", "GET", item).then((response)=> 
      this.setState({item: response.data}));
  };


  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo 
            item={item} 
            key={item.id}
            delete={this.delete}
            update={this.update}
            search={this.search}
             />
          ))}
        </List>
      </Paper>
    );
    

    return (
      <div>
        <div className='App'>
        <Container maxWidth="md">
        <AddTodo add={this.add} />
          <div className='TodoList'>{todoItems}</div>
        </Container>
        </div>
        
      </div>
      
    );
  }
}

export default App;
