import React, {Component} from 'react';
import './Skills.css';


export default class Skills extends Component {
  render() {
    return (
      <article className="skills">
        <h2 className="text-center">Alexander KRAVCHUK</h2>
        <h3 className="text-center">Skills summary</h3>
        <section>
          <p>
            Installation, maintenance and use of the OS Windows (XP, Vista, 7, 8, 10) and UNIX (Ubuntu, Linux).
          </p>
          <p>
            Solve scientific and applied problems using: Pascal ABC, Borland Delphi, C++, C#, Matlab, Simulink,
            Mathematica, Mathcad, Grapher.
          </p>
          <p>
            <b>Intermediate:</b>
            <ul>
              <li>Git, Heroku;</li>
              <li>Node.js, npm, Express, MongoDB, Mailgun;</li>
              <li>ReactJS, Redux, Router, ReactVR;</li>
              <li>Angular (components, services, routing);</li>
              <li>jQuery, AJAX;</li>
              <li>Canvas;</li>
              <li>SEO.</li>
            </ul>
          </p>
          <p>
            <b>Strong knowledge of:</b>
            <ul>
              <li>HTML5, CSS3, valid semantic html-coding, Bootstrap, Gridiculous;</li>
              <li>JavaScript, ES6;</li>
              <li>PHP (OOP, MVC, PDO);</li>
              <li>MySQL;</li>
              <li>Joomla (themes, plugins);</li>
              <li>CMSWorks (themes, plugins);</li>
              <li>MODX Revolution (templates, MIGX, snippets, plugins, multi language).</li>
            </ul>
          </p>

          <p>
            <b>Advanced knowledge of:</b>
            <ul>
              <li>Wordpress (development of themes, plugins, widgets, shortcodes);</li>
              <li>Drupal 7 (themes, modules, forms, CTools, Views, Entity).</li>
            </ul>
          </p>
          <p><b>IDE:</b> PhpStorm, WebStorm, Visual Studio.</p>
          <p>
            <b>Personal skills:</b> open-minded, accurate and conscientious, enthusiastic with high-level of
            learnability and strong analytical skills.
          </p>
          <p><b>Languages:</b> Ukrainian, Russian – fluent (Native or bilingual proficiency); English – Intermediate.</p>
        </section>
      </article>
    )
  }
}
