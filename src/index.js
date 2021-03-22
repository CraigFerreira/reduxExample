import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import SongList from './components/SongList.js'
import Dog from './components/Dog.js'
import Contact from './components/Contact.js'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {selectSong} from './actions'
import reducers from './reducers'


class App extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>React Router Basics</h1>
                    
                        <Switch>
                            <Route exact path='/' render={()=><SongList/>}></Route>
                            <Route exact path='/dog'  render={()=><Dog/>}></Route>
                            <Route exact path='/Contact'  render={()=><Contact/>}></Route>
                        </Switch>
                    

                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <Provider store={createStore(reducers)}><App/></Provider>, 
document.getElementById('app'))