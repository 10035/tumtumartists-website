import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'

export class layout extends Component {
  render() {
    return (
      <main>
        <Navbar />
        {/* <navbar>Navbar</navbar> */}
        <content>Body</content>
        <Footer />
      </main>
    )
  }
}

export default layout