import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NotificationItem from './NotificationItem';

import { noop } from '../../../common/utils/base-helper';

import '../styles/side-notifications.scss';

const SideNotifications = ({ notifications, closeSideNotificationById }) => (
  <TransitionGroup className="side-notifications">
    {notifications.map(notification => (
      <CSSTransition
        timeout={300}
        key={notification.id}
        classNames="side-notification-animation"
      >
        <NotificationItem
          id={notification.id}
          onClose={closeSideNotificationById}
          message={notification.message}
          variant={notification.level}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

NotificationItem.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object),
  closeSideNotificationById: PropTypes.func
};

NotificationItem.defaultProps = {
  notifications: [],
  closeSideNotificationById: noop
};

export default SideNotifications;
