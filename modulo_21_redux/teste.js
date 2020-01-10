const redux = require('redux');

function countReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.value
        case 'DECREMENT':
            return state - action.value
    }
    return state;
}

function storeAlterado() {
    console.log(store.getState());
}

const store = redux.createStore(countReducer);
store.subscribe(storeAlterado);

const increment = { type: 'INCREMENT', value: 3 }
const decrement = { type: 'DECREMENT', value: 2 }

store.dispatch(increment);
store.dispatch(decrement);