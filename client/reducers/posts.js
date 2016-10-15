/**
 * Created by Rahil on 15-10-2016.
 */
//reducer takes in two things:
//1. the action ( info about what happened )
//2. copy of current state

function posts(state = [],action) {
    console.log(state,action);
    return state;
}

export default posts;