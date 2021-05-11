"use strict";
const { createUser } = require("./createUser");
const { getUserProfile } = require("./getUserProfile");
const { getUserDetailsById } = require("./getUserDetails");
const { getSearchedUserForMongo } = require("./getSearchedUserForMongo");
const { getNotificationData } = require("./getNotificationData");
const { acceptInvite } = require("./acceptInvite");
const { rejectInvite } = require("./rejectInvite");

let handle_request = (msg, callback) => {
  switch (msg.path) {
    case "Get-User-Profile":
      getUserProfile(msg, callback);
      break;
    case "Create-User-Profile":
      createUser(msg, callback);
      break;
    case "GET-USER-DETAILS-BY-ID":
      getUserDetailsById(msg, callback);
      break;
    case "Get-Searched-User-For-Mongo":
      getSearchedUserForMongo(msg, callback);
      break;
    case "Get-Notification-Data":
      getNotificationData(msg, callback);
    case "Accept-Invite-As-User":
      acceptInvite(msg, callback);
    case "Reject-Invite-As-User":
      rejectInvite(msg, callback);
  }
};
exports.handle_request = handle_request;