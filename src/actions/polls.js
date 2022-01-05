import { showLoading, hideLoading} from 'react-redux-loading-bar'
import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA'
export const RECEIVE_POLLS ='RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const ANSWER_POLL='ANSWER_POLL'


function addPoll(poll){
    return{
        type:ADD_POLL,
        poll
    }
}

export function handleAddPoll(question){
    return (dispatch, getState)=>{
        const{authedUser}=getState()
        dispatch (showLoading())
        return _saveQuestion(question)
        .then((poll)=>dispatch(addPoll(poll)))
        .then(()=>dispatch(hideLoading()))
    }
}
 
export function receivePolls(polls){
    return{
        type:RECEIVE_POLLS,
        polls,
    }
}

function answerPoll ({qid, authedUser, answer}){
    return{
        type:ANSWER_POLL,
        qid,
        authedUser,
        answer
    }
}

export function handleAnswerPoll(info){
    return (dispatch)=>{
        dispatch(answerPoll(info))

        return _saveQuestionAnswer(info)
        .catch((e)=>{
            console.warn('Error in handelAnswerPoll', e)
            dispatch(answerPoll(info))
            alert ('there was an error, try again..')
        })
    }
}
