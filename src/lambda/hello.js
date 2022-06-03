exports.handler = function(event, context, callback) {
  console.log("Hello!");
  console.log(event.headers);
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
