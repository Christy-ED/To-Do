export const initialState = {
  todos: [
    {
      item: "Learn React",
      completed: false,
      id: 1,
    },

    {
      item: " Learn about Reducers",
      completed: false,
      id: 2,
    },

    {
      item: "learn Redux",
      completed: false,
      id: 3,
    },

    {
      item: " learn Async Redux",
      completed: false,
      id: 4,
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return { ...state, todos: [...state.todos, newTodo] };

      case 'TOGGLE_COMPLETED': let updatedTask = state.todos.map(item => {
        if(item.id === action.payload){
        return {...item, completed: !item.completed}
      }else{
            return item;
        }
  });
  return {... state, todos: updatedTask}

  case 'CLEAR_COMPLTED':
    return {...state, todos: state.todos.filter(item => ! item.completed)};
    default:
      return state;
  };
};
