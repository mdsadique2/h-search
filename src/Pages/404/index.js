import React from 'react'
import appStrings from 'Utilities/StringConst';
import './style.css';
class Error404 extends React.Component {
  render() {
    return <React.Fragment>
      <section className="page page-404">
        <div className="title-404">{appStrings.text404}</div>
        <div className="description-404">{appStrings.pageNotFound}</div>
      </section>
       
    </React.Fragment>
  }
}
export default Error404