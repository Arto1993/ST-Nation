import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername("admin")) {
    Accounts.createUser({
      username: "admin",
      password: "123456",

      profile: {
        firstName: "admin",
        lastName: "green",
        role: "admin",
      },
    });
  }
});
