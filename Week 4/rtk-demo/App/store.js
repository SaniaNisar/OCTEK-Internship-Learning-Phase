const configStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')

const store = configStore({
    reducer: 
    {
        cake:cakeReducer,
        icecream: iceCreamReducer,
        user: userReducer,
    },

})

module.exports = store