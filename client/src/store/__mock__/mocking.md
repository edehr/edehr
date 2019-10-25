# Mocking out storage tests

https://jestjs.io/docs/en/es6-class-mocks



``` 
import store from '../__mock__'
const should = require('should')
jest.mock('../../store')

```

This results in the tests using the module defined in the __mock__ folder.  

Unfortunately, deeply nested imports of the store module continue to resolve to the main module.  See how the sotre/visit.js module uses a util module that, in turn, imports a store module.   You might hope that the jest.mock might catch this but it doesn't. 

The tests don't seem to be harmed by this. So, perhaps we can look into this problem later, if needed.