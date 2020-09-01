import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { postEvent } from '../actions'
import { Link } from 'react-router-dom'




// function EventsIndex() {
//   // const greeting = 'Hi, Tom!';
//   // const dom = <h1 className="EventsIndex">{greeting}</h1>
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log('I am clicked')}} />
//     </React.Fragment>
//   );
// }

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(EventsNew);

