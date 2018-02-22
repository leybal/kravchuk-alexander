import React, {Component} from 'react';
import './Home.css';
import photo from './Kravchuk Alexander.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Hello,</h1>
        <h2>a bit about me:</h2>
        <div className="row">
          <div className="col-12 col-md-6 order-last order-md-first">
            <ul>
              <li>
                I live in Cherkassy.
              </li>
              <li>
                I worked <b>front-end developer</b> in "PVD Technology" and <b>web developer</b> in "Business Media
                Group".
              </li>
              <li>
                I've created this site using React, Redux, Router, Bootstrap, Express and Mailgun
                in the framework of the JavaScript course.
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 order-first order-md-last">
            <div className="img-wrap mr-auto ml-auto">
              <img className="img-fluid" src={photo} alt="Kravchuk Alexander"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
