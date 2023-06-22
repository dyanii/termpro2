import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import { Paper, List, Container, Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import './App.css';
import { call, signout } from "./service/ApiService";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items :[],
      loading: true,
    };
  }

  componentDidMount() {
    call("/book", "GET", null).then((response)=>
      this.setState({items: response.data, loading: false}));
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

    var todoRows = this.state.items.length > 0 && (
      <div>
        <table className='custom-table'>
          <caption>Book item List</caption>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>author</th>
              <th>userId</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.userId}</td>
                <td><button onClick={() => this.delete(item)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )

    var navigationBar = (
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography variant="h6">도서 목록</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Button color="inherit" onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    var todoListPage = (
      <div>
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo add = {this.add} />
          <div className="BookList">
            {todoItems}
            {todoRows}
            </div>
        </Container>
      </div>
    );

    var loadingPage = <h1>로딩중..</h1>

    var content = loadingPage;
    if (!this.state.loading) {
      content = todoListPage;
    }

    return <div className="App">{content}</div>;

  }
}

export default App;
