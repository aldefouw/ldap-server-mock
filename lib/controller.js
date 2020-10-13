'use strict';

/**
 * Provides default route action to deal with LDAP protocol.
 *
 * @class controller
 * @static
 */

const databaseProvider = process.require('lib/databaseProvider.js');
const database = process.require('lib/database.js');

/**
 * Authenticates a user.
 *
 * This is a mock, no verification is performed. User is authenticated.
 *
 * @method bindAction
 * @static
 * @async
 * @param {BindRequest} request LDAP request
 * @param {BindResponse} response LDAP response
 */
module.exports.bindAction = (request, response) => {
  response.end();
};

/**
 * Returns all users
 *
 * This is a mock.
 *
 * @method searchAction
 * @static
 * @async
 * @param {SearchResponse} response LDAP response
 */
module.exports.searchAction = (request, response) => {
  const users = database.users;

  for (let u in users) {
    let user = databaseProvider.getUser(users[u]);

    if (user)
      response.send(user);
  }

  response.end();
};
