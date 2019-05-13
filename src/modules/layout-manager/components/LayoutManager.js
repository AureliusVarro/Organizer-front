import React from "react";
import ls from "local-storage";

import AuthLayout from "./AuthLayout";
import MainLayout from "./MainLayout";
import WaitingLayout from "./WaitingLayout";

import internalUrls from "../../../common/constants/internal-urls";

import { tokenKey, processingStatuses } from "../../../common/constants/common";

class LayoutManager extends React.Component {
  componentDidMount() {
    if (
      !!ls.get(tokenKey) &&
      this.props.loadCurrentUserStatus === processingStatuses.INITIAL
    ) {
      this.props.getCurrentUser();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { location, history } = this.props;

    if (this.props.loadCurrentUserStatus !== nextProps.loadCurrentUserStatus) {
      if (nextProps.loadCurrentUserStatus === processingStatuses.SUCCESS) {
        if (
          location.pathname &&
          location.pathname !== internalUrls.SIGN_IN.path
        ) {
          history.push(location.pathname);
        } else {
          history.push(internalUrls.HOME.path);
        }
      }
    }
  }

  onLogout = () => {
    ls.remove(tokenKey);
    this.props.resetCurrentUser();
  };

  render() {
    const {
      children,
      // actions
      onToggleSidebar,
      // data
      currentUser,
      isOpenedSidebar,
      signinUserStatus,
      loadCurrentUserStatus,
      isOpenedAddEventDialog,
      isOpenedAddCalendarDialog
    } = this.props;

    if (
      !!ls.get(tokenKey) &&
      loadCurrentUserStatus === processingStatuses.SUCCESS
    ) {
      return (
        <MainLayout
          isOpenedSidebar={isOpenedSidebar}
          onToggleSidebar={onToggleSidebar}
          currentUser={currentUser}
          onLogout={this.onLogout}
          pathname={this.props.location.pathname}
          onToggleAddEventDialog={this.props.onToggleAddEventDialog}
          onToggleAddCalendarDialog={this.props.onToggleAddCalendarDialog}
        >
          {children}
        </MainLayout>
      );
    }

    if (
      !!ls.get(tokenKey) &&
      signinUserStatus === processingStatuses.INITIAL &&
      (loadCurrentUserStatus !== processingStatuses.SUCCESS ||
        loadCurrentUserStatus !== processingStatuses.FAILURE)
    ) {
      return <WaitingLayout />;
    }

    return <AuthLayout>{children}</AuthLayout>;
  }
}

export default LayoutManager;
