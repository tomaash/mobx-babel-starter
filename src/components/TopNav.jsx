import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router'

@inject("store") @observer
export default class TopNav extends Component {

  constructor(props) {
    super(props)
    this.store = this.props.store
  }

  authenticate(e) {
    if (e) e.preventDefault();
    this.props.store.authenticate()
  }

  render() {
    const { authenticated, authenticating } = this.store
    return (
      <nav>
        <Link to="/" activeOnlyWhenExact activeClassName="active">Home</Link>
        {authenticated && <Link to="/posts" activeClassName="active">Posts</Link>}
      </nav>
    )
  }

}