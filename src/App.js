import React from 'react';
/*import Todo from './Todo';*/
import AddTodo from './AddTodo.js';
import { /*Paper, List,*/ Container, Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import './App.css';
import { call, signout } from "./service/ApiService";
import './AppTable.css';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';
import SearchTodo from './SearchTodo';
import { Tabs, Tab, Box } from '@material-ui/core';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items :[],
      loading: true,
      value: 0,
    };
  }

  a11yProps = (index) => {
    return {
      id: `imple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
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
    /*
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
    */

    var todoRows = this.state.items.length > 0 && (
      <div>
        <table className='custom-table'>
          <caption>Book item List</caption>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>author</th>
              <th>publisher</th>
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
                <td>{item.publisher}</td>
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
          <Grid justifyContent="space-between" container>
            <Grid item>
              <Typography variant="h6">나의 도서 목록</Typography>
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
          <div className="BookList">
            
            </div>
        </Container>
      </div>
    );

    var loadingPage = <h1>로딩중..</h1>

    var content = loadingPage;
    if (!this.state.loading) {
      content = todoListPage;
    }
    
    return( 
      <div className="App">
        {content}
        <AppBar position='static'>
          <Tabs
            value={this.item}
            onChange={this.handleChange}
            aria-label="simple tabs example" centered>
              <Tab label="제품 추가" {...this.a11yProps(0)} />
              <Tab label="제품 검색" {...this.a11yProps(1)} />
              <Tab label="제품 수정" {...this.a11yProps(2)} />
              <Tab label="제품 삭제" {...this.a11yProps(3)} />
            </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          제품을 추가합니다
          <AddTodo add={this.add} />
          {todoRows}
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          제품을 검색합니다
          <SearchTodo search={this.search} />
          {todoRows}
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          제품을 수정합니다
          <UpdateTodo update={this.update} />
          {todoRows}
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          제품을 삭제합니다
          <DeleteTodo delete={this.delete} />
          {todoRows}
        </TabPanel>
      </div>
    );
  }
}

class TabPanel extends React.Component {
  render() {
    return (
      <Typography component="div" hidden={this.props.value !== this.props.index}>
        <Box p={3}>{this.props.children}</Box>
      </Typography>
    );
  }
}

export default App;
