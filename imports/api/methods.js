import { Meteor } from "meteor/meteor";

Meteor.methods({
  find_by_username: function (name) {
    var user = Accounts.findUserByUsername(name);
    return user;
  },
});
