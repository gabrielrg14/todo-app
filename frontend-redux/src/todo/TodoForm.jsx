import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

import { changeDescription, clearDescription, search, addTodo } from './todoActions'

class TodoForm extends Component {

    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentDidMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { addTodo, search, description, clearDescription } = this.props

        if(e.key === 'Enter') {
            e.shiftKey ? search() : addTodo(description)
        } else if(e.key === 'Escape') {
            clearDescription()
        }
    }

    render() {
        const { addTodo, search, description, changeDescription, clearDescription } = this.props

        return (
            <div role="form" className="todo-form">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa" 
                        value={description} onChange={e => changeDescription(e)} onKeyUp={e => this.keyHandler(e)} />
                </Grid>
        
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={() => addTodo(description)} />
                    <IconButton style="info" icon="search" onClick={search} />
                    <IconButton style="default" icon="close" onClick={clearDescription} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, clearDescription, search, addTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)