const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    
  let findlastAt = email.lastIndexOf("@");
  let sliceMail = email.slice(findlastAt+1,email.length)

    
  return sliceMail
}

module.exports = {
  getEmailDomain
};
