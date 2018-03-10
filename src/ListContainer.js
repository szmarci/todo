import React from 'react';
import ListItem from './ListItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// for UUID generation
const guid=()=> {
  const s4=()=> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);     
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
}

class ListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: []
    }
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.editToggle = this.editToggle.bind(this);
    this.stateToggle = this.stateToggle.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  addNewItem = (event) => {
    event.preventDefault();

    // return if no value provided
    if (!this.refs.newItem.value) return;

    // init new todo
    let newToDo = {
      name: this.refs.newItem.value,
      editing: false,
      done: false,
      id: guid()
    }

    // update todo list
    this.setState({
      toDos: [newToDo, ...this.state.toDos]
    });

    // reset input
    this.refs.newItem.value = '';
  }

  delete(itemIndex) {
    // delete item from array
    let items = [...this.state.toDos];
    items.splice(itemIndex, 1);

    // update todo list
    this.setState({
      toDos: items
    });
  }

  editToggle(state, index) {
    // close editing mode on other items
    let items = this.state.toDos.map((todo) => {
      todo.editing = false
      return todo;
    });

    // set field to editing mode
    items[index].editing = !state;

    // update todo list
    this.setState({
      toDos: items
    });
  }

  edit(name, index) {
    // prepare item
    let itemToEdit = this.state.toDos[index];
    itemToEdit.name = name;
    itemToEdit.editing = true;

    // update todo list
    this.setState({
      toDos: [...this.state.toDos]
    });
  }

  stateToggle(state, index) {
    // prepare item
    let itemToEdit = this.state.toDos[index];
    itemToEdit.done = state;

    // update todo list
    this.setState({
      toDos: [...this.state.toDos]
    });
  }

  handleKeypress(event) {
    if (event.key === 'Enter' || event.key === 'Escape') {
      // close editing mode on other items
      let items = this.state.toDos.map((todo) => {
        todo.editing = false
        return todo;
      });

      // update todo list
      this.setState({
        toDos: items
      });
    }
  }

  render() {
    return (
      <div className="container">
        <form action="" onSubmit={this.addNewItem}>
          <input type="text" ref="newItem" placeholder="Add new todos here"/>
          <input type="submit" value="+" />
        </form>
        <ReactCSSTransitionGroup
          transitionName="slide-in"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
          {
            this.state.toDos.map((item, i) => {
              return <ListItem key={item.id} 
                              item={item} 
                              index={i}
                              deleteItem={this.delete}
                              editItem={this.edit}
                              toggleItem={this.editToggle}
                              changeItemState={this.stateToggle}
                              handleKeypress={this.handleKeypress}/>
            })
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default ListContainer;
