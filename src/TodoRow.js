import React from 'react';
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
      
      <table>
        <thead></thead>
        <tbody>
          <caption>
            Book item table
          </caption>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>delete</th>
          </tr>
          <tr>
            <th>id1</th>
            <th>book1</th>
            <th>
              <button onClick={this.delete}>
                delete
              </button>
            </th>
          </tr>
          <tr>
            <th>id2</th>
            <th>book2</th>
            <th>
              <button onClick={this.delete}>
                delete
              </button>
            </th>
          </tr>
          <tr>
            <th>id2</th>
            <th>book2</th>
            <th>
              <button onClick={this.delete}>
                delete
              </button>
            </th>
          </tr>
        </tbody>
      </table>


  return (
    <div className='Todo'>
          <div className='TodoRow'></div>
    </div>
    );
  };
};

export default TodoRow;