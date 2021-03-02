// Imports de Bibliotecas
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

// Imports de Middlewares Redux
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
// Dentre os 3 Middlewares, o redux-thunk é mais flexível por já realizar o que os outros 2 já se oferecem a fazer

import App from './main/App'
import reducers from './main/reducers'

// Configuração da extensão Redux DevTools para visualização no navegador Chrome (aba Redux do console de desenvolvedor - F12)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)