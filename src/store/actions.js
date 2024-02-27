export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: {
      description,
      completed: false,
      id: new Date().getTime().toString()
    }
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: {
      id: taskId
    }
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: {
      id: taskId
    }
  });