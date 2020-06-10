export function managePresents(state = {numberOfPresents: 0}, action){
  switch (action.type) { 
    case "INCREASE":
      let newCount = {...state, numberOfPresents: state.numberOfPresents + 1}
      return newCount
        default:
      return state
    }
}
