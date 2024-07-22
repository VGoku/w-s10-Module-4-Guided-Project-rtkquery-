import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShowCompletedTodos } from '../state/todosSlice';
import { useGetTodosQuery, useToggleTodoMutation } from '../state/todosAPI';

const StyledTodo = styled.li`
  text-decoration: ${pr => pr.$complete ? 'line-through' : 'initial'};
  cursor: pointer;
`

export default function Todo() {
  // rtk query
  const { data: todos } = useGetTodosQuery();
  const [toggleTodo] = useToggleTodoMutation();
  // redux
  const showCompletedTodos = useSelector(st => st.todosState.showCompletedTodos)
  const dispatch = useDispatch()
  return (
    <div id="todos">
      <div className="error"></div>
      <h3>Todos</h3>
      <ul>
        {
          // [
          //   { id: 1, label: 'Laundry', complete: true },
          //   { id: 2, label: 'Groceries', complete: false },
          //   { id: 3, label: 'Dishes', complete: false },// ]
          todos?.filter(todo => {
            return showCompletedTodos || !todo.complete
          })
            .map(todo => {
              const onToggle = () => {
              toggleTodo({ id: todo.id, todo: { complete: !todo.complete } })

              }
              return (
                <StyledTodo
                onClick={onToggle} $complete={todo.complete} key={todo.id}>
                  <span>{todo.label}{todo.complete && ' ✔️'}</span>
                </StyledTodo>
              )
            })
        }
      </ul>
      <button onClick={() => dispatch(toggleShowCompletedTodos())}>
        {showCompletedTodos ? 'Hide' : 'Show'} completed todos
      </button>
    </div>
  )
}
