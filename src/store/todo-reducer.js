
import uuid from "uuid/v4";
import { When } from "../if";

const actions = {};

const initialState = { todoList: [], showDetails: null, details: {} };

//listens for 
function todoReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'add':
      return { ...state, todoList: [...state.todoList, payload] };
    case 'delete':
      return {...state, todoList: state.todoList.filter( item => item._id !== payload )};
    case 'toggle':
      return { ...state, todoList: state.todoList.map( (item) => item._id === payload ? {...item, complete: !item.complete} : item ) };
    case 'details':
      let item = state.todoList.filter( item => item._id === payload )[0] || {}
      return { ...state, showDetails: !state.showDetails, details: item };
    default:
      throw new Error();
  }
};

actions.addItem = data => {
   data._id = uuid();
  data.complete = false;
  return {
    type: 'add', 
    payload:data
  }
}

actions.deleteItem = (id) => {
  return{
    type:'delete',
    payload: id
  }
}

actions.toggleComplete = (id) => {
  return {
    type: 'toggle',
    payload: id
  }
}

actions.toggleDetails = id => {
  return {
    type: 'details',
    payload: id
  }
}


export default todoReducer;
export {actions};


