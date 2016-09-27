export function todosReducer (state=[], action) {
  switch( action.type ){
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TASK':
      let ind = action.payload.index
      return state.splice(ind, 1)
    default:
      return state;
  }
}