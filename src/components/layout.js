import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

// export class layout extends Component {
//   render() {
//     return (
//       <main>
//         <Navbar />
//         {/* <navbar>Navbar</navbar> */}
//         <content>Body</content>
//         <Footer />
//       </main>
//     )
//   }
// }

// export default layout


function layout({ children }) {
  return (
    <main className="styles">
        <Navbar />
        <div className="content">
            { children }
        </div>
        <Footer />
    </main>
  )
}

export default layout