/**
 * Gets the current user account object.
 * @returns {Object}
 */
jDrupal.currentUser = function() {
  return jDrupal._currentUser;
};

/**
 *
 * @returns {jDrupal.User}
 */
function jDrupalUserDefaults() {
  return new jDrupal.User({
    uid: [ { value: 0 } ],
    roles: [ { target_id: 'anonymous' }]
  });
}

/**
 * Sets the current user account object.
 * @param {Object} account
 */
function jDrupalSetCurrentUser(account) {
  jDrupal._currentUser = account;
}









/**
 * Loads a user account.
 * @param {Number} uid
 * @param {Object} options
 */
function user_load(uid, options) {
  try {
    console.log('DEPRECATED - user_load() | use jDrupal.user.Entity.User.load() instead');
    jDrupal.user.Entity.User.load(uid, options);
  }
  catch (error) { console.log('user_load - ' + error); }
}

/**
 * Saves a user account.
 * @param {Object} account
 * @param {Object} options
 */
function user_save(account, options) {
  try {
    entity_save('user', null, account, options);
  }
  catch (error) { console.log('user_save - ' + error); }
}

/**
 * Generates a random user password.
 * @return {String}
 */
function user_password() {
  try {
    // credit: http://stackoverflow.com/a/1349426/763010
    var length = 10;
    if (arguments[0]) { length = arguments[0]; }
    var password = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789';
    for (var i = 0; i < length; i++) {
      password += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return password;
  }
  catch (error) { console.log('user_password - ' + error); }
}

