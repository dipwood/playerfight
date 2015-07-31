[![Build Status](https://travis-ci.org/nathanfaucett/is_null_or_undefined.svg?branch=master)](https://travis-ci.org/nathanfaucett/is_null_or_undefined)

# isNullOrUndefined

isNullOrUndefined accepts any value and returns true
if the value is null or undefined.

For all other values false is returned.

**param** {Any}        any value to test

**returns** {Boolean}  the boolean result of testing value

```javascript

  isNullOrUndefined(null);   // returns true

  isNullOrUndefined(undefined);   // returns true

  isNullOrUndefined("string");    // returns false

``
