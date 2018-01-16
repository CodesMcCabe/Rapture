import { connect } from 'react-redux';
import Gameroom from './gameroom';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Gameroom);
