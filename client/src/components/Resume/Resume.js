import React, {Component} from 'react';
import './Resume.css';


export default class Resume extends Component {
  render() {
    return (
      <article className="resume">
        <h2 className="text-center">Alexander KRAVCHUK</h2>
        <h3 className="text-center">Career & Experience</h3>
        <section>
          <p>
            <b>Business Media Group</b> (The company performs development and support of corporate websites and online
            stores).
          </p>
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                <b>WEB Developer</b>
              </p>
            </div>
            <div className="col-12 col-md-6 text-md-right">
              <p>
                <b><i>July 2016 – August 2017</i></b>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                <b>Works</b>
              </p>
              <ul>
                <li>
                  <a href="http://mastera-ua.net/">mastera-ua.net</a>
                </li>
                <li>
                  <a href="http://mrandmrsfragrance.in.ua/">mrandmrsfragrance.in.ua</a>
                </li>
                <li>
                  <a href="http://iba-mediation.com">iba-mediation.com</a>
                </li>
              </ul>
              <p>
                <b>Essential Duties and Responsibilities</b>
              </p>
              <ul>
                <li>Finding the best solutions depending on customer’s needs, technical ability and costs;</li>
                <li>Front-end development;</li>
                <li>Back-end development;</li>
                <li>Project deployment.</li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <b>Accomplishments</b>
              </p>
              <p>
                I got theoretical knowledge and practical experience using such CMS as CMSWorks (based on Cotonti) and
                MODX Revolution. We have developed multi language online store. There has been developed a payment
                plugin using Wayforpay API.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p>
            <b>PVD Technology LLC</b> (The international company is oriented on development and support of websites).
          </p>
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                <b>Front-end Developer</b>
              </p>
            </div>
            <div className="col-12 col-md-6 text-md-right">
              <p>
                <b><i>May 2015 – July 2015</i></b>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                <b>Works</b>
              </p>
              <ul>
                <li>
                  <a href="https://slava-club.com/">slava-club.com</a>
                </li>
                <li>
                  <a href="https://online-gaminator.com/">online-gaminator.com/</a>
                </li>
              </ul>
              <p>
                <b>Essential Duties and Responsibilities</b>
              </p>
              <ul>
                <li>Creating responsive and valid html layouts;</li>
                <li>Connecting and configuring JS plugins.</li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <b>Accomplishments</b>
              </p>
              <p>
                I improved skills for adaptive layout. I’ve got experience in work with different js-plugins and their
                customization for projects inquiries.
              </p>
            </div>
          </div>
        </section>

        <h3 className="text-center">Education</h3>
        <section>
          <div className="row">
            <div className="col-12 col-md-3 col-lg-2">
             <p>2015 – present</p>
            </div>
            <div className="col-12 col-md-9 col-lg-10">
              <p><b>Institute of Engineering Thermophysics of National Academy of Sciences of Ukraine</b>, – post-graduate
                student, Kiev.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-3 col-lg-2">
              <p>2017 – 2018</p>
            </div>
            <div className="col-12 col-md-9 col-lg-10">
              <p>
                <b>GeekHub</b>, Training courses, provide practical knowledge and skills in the field of software
                development and IT in general. Course – <b>JavaScript</b>, Cherkasy.
              </p>
              <p>
                <b>Masters Academy</b>, Training courses of software development. Course – <b>JavaScript</b>, Cherkasy.
              </p>
              <p>
                <b>SPD spring camp</b>, Training courses of software development. Course – <b>Front-End</b>, Cherkasy.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-3 col-lg-2">
              <p>2014 ‒ 2015</p>
            </div>
            <div className="col-12 col-md-9 col-lg-10">
              <p>
                <b>GeekHub</b>, Training courses, provide practical knowledge and skills in the field of software
                development and IT in general. Course – <b>Advanced CMS</b>, Cherkasy.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-3 col-lg-2">
              <p>2013 ‒ 2014</p>
            </div>
            <div className="col-12 col-md-9 col-lg-10">
              <p>
                <b>Cherkasy National University named after Bogdan Khmelnitsky</b>,
                Educational and Research Institute of Physics, Mathematics and Computer Information Systems, – <b>Master
                of Science</b>, (Master of Physics. Master of material science, computer technologies in
                physics. Teacher of physics. School-teacher of physics and informatics), Cherkasy.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-3 col-lg-2">
              <p>2009 – 2013</p>
            </div>
            <div className="col-12 col-md-9 col-lg-10">
              <p>
                <b>Cherkasy National University named after Bogdan Khmelnitsky</b>,
                Educational and Research Institute of Physics, Mathematics and Computer Information Systems,
                – <b>Bachelor of Science</b>, (School-teacher of physics), Cherkasy.
              </p>
            </div>
          </div>
        </section>
      </article>
    )
  }
}
