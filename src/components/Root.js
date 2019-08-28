import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Child from './Child'
import NoMatch from './NoMatch'
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:id" component={Child}/>
      
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root