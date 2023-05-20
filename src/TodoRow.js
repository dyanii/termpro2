import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { call } from "./service/ApiService"

class TodoRow extends React.Component {
  constructor(props){
    super(props);
    this.state = { items: props.item,
    };
  }

  delete = (item) => {
    call("/book", "DELETE", item).then((response)=>
      this.setState({items: response.data}));
  };

  render() {
    var todoRows = this.state.items.length > 0 && (
      
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>publisher</th>
            <th>delete</th>
          </tr>
          <td>
            {this.state.items.map((item) => (
              <Todo id={item.id} />
            ))}
          </td>
          <td>
            {this.state.items.map((item) => (
              <Todo title={item.title} />
            ))}
          </td>
          <td>
            {this.state.items.map((item) => (
              <Todo author={item.author} />
            ))}
          </td>
          <td>
            {this.state.items.map((item) => (
              <Todo publisher={item.publisher} />
            ))}
          </td>
          <td>
            {this.state.items.map((item) => (
              <Todo userId={item.userId} />
            ))}
          </td>
          <td>
            {this.state.items.map((item) => (
              <button>
                delete
                <Todo delete={this.delete} />
              </button>

            ))}
          </td>
        
        </tbody>
      </table>
          
    );


  return (
    <div className='Todo'>
      <AddTodo add={this.add} />
          <div className='TodoRow'>{todoRows}</div>
    </div>
    );
  };
};

export default TodoRow;