import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import { connect } from 'react-redux';
import IStore from '../../../interfaces/store';
import IStatus from '../../../interfaces/status';

interface statusProp {
  status : IStatus
}
function Message({ status } : statusProp) {
  const { message, type } = status;
  if (message) {
    return <UncontrolledAlert color={type === 'error' ? 'danger' : 'success'}>{message}</UncontrolledAlert>;
  }
  return <> </>;
}
const mapStateToProps = ({ statusReducer } : IStore) => ({
  status: statusReducer,
});

export default connect(mapStateToProps)(Message);
