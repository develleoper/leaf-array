# leaf-array
Utility function for interleaving a JavaScript Array

## Usage
```javascript
let leafArray = require('leaf-array');

let primaryArray = ['a', 'b', 'c'];
let interleafValue = 'd';
let interleavedArray = leafArray( primaryArray, interleafValue );

// ['a', 'd', 'b', 'd', 'c']
```

## TODO
* Register with npm
* Reimplement using es2016 with support for legacy browsers
* Support alternate package distribution systems
* Consider extending support for supplying a secondaryArray
