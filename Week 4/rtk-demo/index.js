const store = require('./App/store')
const cakeActions =  require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe (() =>
{
   console.log("Updated State ",store.getState())
})

store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(2))

// unsubscribe()
