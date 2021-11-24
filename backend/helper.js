const sanitizeHtml = require('sanitize-html');

function purge(string) {
  return sanitizeHtml(string, {
    allowedTags: ['b', 'i', 'u', 'strike', 'a', 'sub', 'sup'],
    allowedAttributes: {
      'a': ['href']
    }
  });
}

module.exports = {purge};
