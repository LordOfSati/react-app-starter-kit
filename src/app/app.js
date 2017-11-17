import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './data/Reducer.js'
import App from './views/App.jsx'
import Style from './../styles/main.scss'
import init from './init'
init()
const store = createStore(reducer)
ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
), document.getElementById('app-root'))
