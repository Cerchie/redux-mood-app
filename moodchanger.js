const h1 = document.querySelector('h1');
const happy = document.querySelector('#happy');
const sad = document.querySelector('#sad');
const angry = document.querySelector('#angry');


happy.addEventListener('click', function(){
    store.dispatch({type: 'HAPPY'})
    const state = store.getState();
    console.log(state)
    h1.innerText = state.mood;
})

sad.addEventListener('click', function(){
    console.log('click')
    store.dispatch({type: 'SAD'})
    const state = store.getState();
    console.log(state)
    h1.innerText = state.mood;
})

angry.addEventListener('click', function(){
    console.log('click')
    store.dispatch({type: 'ANGRY'})
    const state = store.getState();
    console.log(state)
    h1.innerText = state.mood;
})
