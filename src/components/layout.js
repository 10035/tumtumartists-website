import React, { Component } from 'react'
import Navbar from './navbar'

export class layout extends Component {
  render() {
    return (
      <main>
        <Navbar />
        {/* <navbar>Navbar</navbar> */}
        <content>Body</content>
        <footer>TumTum Artists 2022</footer>
      </main>
    )
  }
}

export default layout