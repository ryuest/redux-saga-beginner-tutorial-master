import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './reducers';
import MainReact from './MainReact';


function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispachToProps)(MainReact);

export default App;
