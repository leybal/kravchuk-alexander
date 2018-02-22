import React, {Component} from 'react';
import './Contact.css';


export default class Contacts extends Component {
  render() {
    const {
      email,
      text,
      sendMailStatus,
      changeEmail,
      changeText,
      handleSubmit
    } = this.props;

    return (
      <div className="contact">
        <h2 className="text-center">Let’s make something awesome!</h2>
        <br/>
        <div className="row">
          <div className="offset-md-2"></div>
          <div className="col-12 col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email-input">Email address</label>
                <input
                  type='email'
                  value={email}
                  name='email'
                  id='email-input'
                  className="form-control"
                  placeholder='Enter email'
                  maxLength='32'
                  required
                  onChange={(event) => {
                    changeEmail(event.target.value)
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="text-textarea">Message</label>
                <textarea
                  name="text"
                  placeholder='Enter message'
                  value={text}
                  id='text-textarea'
                  className="form-control"
                  maxLength='300'
                  required
                  onChange={(event) => {
                    changeText(event.target.value)
                  }}
                >
              </textarea>
              </div>
              { sendMailStatus === 102 &&
                <p>In process...</p>
              }
              { sendMailStatus === 200 &&
                <p>Message sent successfully.</p>
              }
              { sendMailStatus === 500 &&
              <p>Error.</p>
              }
              <button type='submit' className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
