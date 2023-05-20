/*
import React from "react";
import Todo from "./Todo";
import AddTodo from './AddTodo.js';
import { Paper, List, Container } from "@material-ui/core";
import './App.css';
import { call } from "./service/ApiService"

class TodoRow extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        items :[],
      };
    }

    render() {
        var todoRows = this.state.items.map((item) => (
          <TodoRow
            key={item.id}
            item={item}
            delete={this.delete}
            update={this.update}
            />
        ));

        return (
          <div className="App">
            <h1>Book List</h1>
            <TodoForm add={this.add} />
            {this.state.items.length > 0 && (
              <Paper style={{ margin: 16 }}>
                <Table>
                  <caption> Todo List</caption>
                  <thread>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Publisher</th>
                    </tr>
                  </thread>
                  <tbody>{todoRows}</tbody>
                </Table>
              </Paper>
            )}
          </div>
        );
    }

}

export default TodoRow;

*/