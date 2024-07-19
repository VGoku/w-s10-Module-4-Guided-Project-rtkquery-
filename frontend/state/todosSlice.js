import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    showCompletedTodos: true,
  },
  reducers: {
    toggleShowCompletedTodos: state => {
      state.showCompletedTodos = !state.showCompletedTodos
    },
  }
}) //  ((3:36))

export const {
  toggleShowCompletedTodos,
} = todosSlice.actions

export default todosSlice.reducer
