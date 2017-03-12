#Moving Along

For this step we would like you to do the following:

`You've implement Fizz Buzz.  Great!  For this part we've created a module that performs the modulo operation and determines if the number is divisible by three and/or five.  It's called *kc-fizz-buzz*.  You should install this module using NPM and use it in your Fizz Buzz implementation.  One catch, though: it operates asynchronously.  It will either return a `Promise` or use the callback you provide.  This follows Node.js callback conventions rather than those used by libraries like jQuery.  An example is provided below and a full description of the module is below.`

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

```
{
  three: {boolean},
  five: {boolean}
}
```
