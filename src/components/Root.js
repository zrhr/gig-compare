import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Child from './Child'
import Compare from './Compare'
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/compare" component={Compare}/>
      <Route path="/:id" component={Child}/>
      
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root