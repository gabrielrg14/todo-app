import React from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from '../todo/TodoForm'
import TodoList from '../todo/TodoList'

const Todo = props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
    </div>
)

export default Todo