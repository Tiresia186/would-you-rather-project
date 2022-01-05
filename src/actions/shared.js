import { getInitialData} from '../utils/api'
import {receiveUsers} from './users'
import { setAuthedUser } from './authedUser'
import { receivePolls } from './polls'
import {showLoading, hideLoading} from 'react-redux-loading-bar'



const AUTHED_ID='tylermcginnis'

export function handleInitialData(){
    return(dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions})=>{
            dispatch(receivePolls(questions))
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}