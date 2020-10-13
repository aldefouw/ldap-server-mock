'use strict';

/**
 * Manages the database of LDAP users.
 *
 * @class databaseProvider
 * @static
 */

/**
 * Fetches user from database.
 *
 * User attribute containing the login is defined by the userLoginAttribute property of the server configuration.
 *
 * @method getUser
 * @static
 * @params {String} login User login
 * @return {Object} The user as is
 */
module.exports.getUser = (fetchedUser) => {
  let user = {attributes: {}};

  user.dn = fetchedUser.dn;
  for (let propertyName in fetchedUser) {
    if (propertyName !== 'dn')
      user.attributes[propertyName] = fetchedUser[propertyName];
  }

  return user;
};
