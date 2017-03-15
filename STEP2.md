#Moving Along

For this step we would like you to do the following:

`For this part we've created a module that performs the modulo operation and determines if the number is divisible by three and/or five.  It's called *af-three-five*.  Install this module using NPM and use it in your Fizz Buzz implementation.  One catch, though: it operates asynchronously and the response time is variable.  The function will return a Promise unless the last argument is a function where it will be called as a callback.  The callback follows Node.js callback conventions.  An example is provided below and a full description of the module is below.`

##kc-fizz-buzz

This module returns one function, `#moduloThreeAndFive`.

###Call

Calling `#moduloThreeAndFive` will take one or two arguments.

####Argument 1 (required)

This should be the number you'd like to get an answer about

####Argument 2 (optional)

This may be a callback, following Node.js calling conventions.  That is, `argument 1` of the callback will be provided if there was an error.  `argument 2` will be provided if the operation performed successfully.

###Return 

This method, if successful, will return a `Promise` or call your callback with the following javascript object of the form:

```javascript
{
  three: {boolean},
  five: {boolean}
}
```

###Example

####Without callback

```javascript
module
  .moduloThreeAndFive(15)
  .then(function() {
    /* Some function body here */
  })
  .catch(function() {
    /* Some function body here */
  });
```

####With callback

```javascript
module.moduloThreeAndFive(15, function(err, success) { 
  /* Some function body here */
});
```
