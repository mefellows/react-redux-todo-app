import * as types from 'constants/ActionTypes';

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    meta: {
      metrics: {
        type: 'ADD_TODO',
        payload: {
          some: 'data',
          more: 'stuff'
        }
      }
    },
    text
  };
}

export function toggleCompleted(id) {
  return {
    type: types.TOGGLE_COMPLETED,
    meta: {
      metrics: {
        type: 'TOGGLE_COMPLETED'
      }
    },
    id
  };
}

export function toggleAllCompleted() {
  return {
    type: types.TOGGLE_ALL_COMPLETED,
    meta: {
      metrics: {
        type: 'TOGGLE_ALL_COMPLETED'
      }
    }
  };
}

export function removeTodo(id) {
  return {
    type: types.REMOVE_TODO,
    id,
    meta: {
      metrics: {
        type: 'REMOVE_TODO'
      }
    }
  };
}

export function editTodo(id, text) {
  return {
    type: types.EDIT_TODO,
    id,
    text,
    meta: {
      metrics: {
        type: 'EDIT_TODO'
      }
    }
  };
}

export function clearCompleted() {
  return {
    type: types.CLEAR_COMPLETED,
    meta: {
      metrics: {
        type: 'CLEAR_COMPLETED'
      }
    }
  };
}
