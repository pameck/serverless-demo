'use strict';

function sayHi(event, context, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi DevOps Melbourne!'
    }),
  };

  callback(null, response);
}

exports.sayHi = sayHi;
