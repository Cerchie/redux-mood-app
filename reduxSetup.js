const INITIAL_STATE = { count: 0 }
const countReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'HAPPY':
            return {...state, mood: 'OUO'}
        case 'SAD':
            return {...state, mood: '－‸ლ'}
        case 'ANGRY':
            return {...state, mood: 'ಠ▃ಠ'}
        default:
            return state;
    }
}


const store = Redux.createStore(countReducer);

 