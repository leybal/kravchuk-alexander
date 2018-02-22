import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeEmail, changeText, handleSubmit } from '../../actions/form'
import ContactComponent from './ContactComponent'

const mapStateToProps = (state) => {
  return {
    email: state.form.email,
    text: state.form.text,
    sendMailStatus: state.form.sendMailStatus,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeEmail: bindActionCreators(changeEmail, dispatch),
    changeText: bindActionCreators(changeText, dispatch),
    handleSubmit: bindActionCreators(handleSubmit, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ContactComponent)