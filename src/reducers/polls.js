import {RECEIVE_POLLS, ANSWER_POLL, ADD_POLL} from '../actions/polls'

export default function polls( state={}, action){
    switch(action.type){
        case RECEIVE_POLLS:
            return{
                ...state,
                ...action.polls
            }
        case ANSWER_POLL:
            return{
                ...state,
                [action.qid]:{
                    ...state[action.qid],
                   question: action.answer === true // qua potrebbe volerci qualcos'altro
                   ? state[action.qid].optionOne.concat(  [action.authedUser])
                   : state[action.qid].optionTwo.concat([action.authedUser])
                }
            }
        case ADD_POLL:
            return {
                ...state,
                [action.poll.id]: action.poll
            }
        default :
            return state
        }
}