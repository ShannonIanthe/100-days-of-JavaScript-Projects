import React, { Component } from "react";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }


  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    })
  }

  addItem() {
    //create item with unique id
    const newItem={
      id:1 + Math.random(),
      value: this.state.newItem.slice()
    }
    //copy of current list of items
    const list = [...this.state.list]

    // add new item to list
    list.push(newItem);

    // update state with newlist and reset newItem input 
    this.setState({
      list,
      newItem:""
    })
  }
  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list]

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id)

    this.setState({list: updatedList})
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="app-title">My List</h1>
          <br />
          <div className="container">
          <div>
          Add item here
          </div>
          <div>
          <input className="input"
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)} />
          <button className="add-btn-floating"
          onClick={() => this.addItem()}>
            Add
          </button>
          </div>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button  className="btn btn-floating"
                  onClick={() => this.deleteItem(item.id)}
                  >X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
