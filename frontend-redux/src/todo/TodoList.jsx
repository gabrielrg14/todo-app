import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/IconButton'

import { markTodoAsDone, markTodoAsPending, removeTodo } from './todoActions'

const TodoList = props => {

    const { markTodoAsDone, markTodoAsPending, removeTodo } = props

    const renderRows = _ => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                        onClick={() => markTodoAsDone(todo)} />

                    <IconButton style="warning" icon="undo" hide={!todo.done}
                        onClick={() => markTodoAsPending(todo)} />

                    <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => removeTodo(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })

const mapDispatchToProps = dispatch => bindActionCreators({ markTodoAsDone, markTodoAsPending, removeTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)