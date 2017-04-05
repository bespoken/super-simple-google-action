var bst = require("bespoken-tools");

var cloudFunction = function (request, response) {
    var intent = request.body.result.metadata.intentName;
    console.log("Intent: " + intent);

    var responseJSON = {
        data: null,
        contextOut: null,
        source: "SuperSimpleGH"
    }

    if (intent === "Default Welcome Intent") {
        responseJSON.speech = "Hello";
        responseJSON.displayText = "Hello";
    } else if (intent === "Hello") {
        responseJSON.speech = "Hi There, I'm The World";
        responseJSON.displayText = "Hi There";
    } else if (intent === "Goodbye") {
        responseJSON.speech = "So long";
        responseJSON.displayText = "So long";
    }

    response.json(responseJSON);
};

exports.handler = bst.Logless.capture("d05a3ed5-9676-4ed5-80cb-32d572bd993b", cloudFunction);