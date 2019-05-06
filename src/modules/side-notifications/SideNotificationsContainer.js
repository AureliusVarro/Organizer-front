import { connect } from 'react-redux';
import { closeSideNotificationById } from './redux/action-creators';
import SideNotifications from './components/SideNotifications';

const mapStateToProps = state => ({
  notifications: state.sideNotifications
});

const mapDispatchToProps = {
  closeSideNotificationById
};

const SideNotificationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNotifications);

export default SideNotificationsContainer;
