import React from 'react';
import { connect } from 'react-redux';
import {actions} from '../../store/todo-reducer'


//component
const ToDo = () => {

  return (
    <>
      <header>
        <h2>
          There are {todoList.filter( item => !item.complete ).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={() => this.props.addItem('test data')} />
        </div>

        <div>
          <TodoList
            list={todoList}
            handleComplete={this.props.toggleComplete}
            handleDetails={this.props.toggleDetails}
            handleDelete={this.props.deleteItem}
          />
        </div>
      </section>

      <When condition={state.showDetails}>
        <TodoItem handleDetails={_toggleDetails} item={state.details} />
      </When>
    </>
  );
};

const mapStateToProps = state => ({
  todo: state.todo
})

const mapDispatchToProps = dispatch => ({
  addItem: (data) => dispatch(actions.addItem(data)),
  toggleComplete: (id) => dispatch(actions.toggleComplete(id)),
  toggleDetails: (id) => dispatch(actions.toggleDetails(id)),
  deleteItem: (id) => dispatch(actions.deleteItem(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDo);
