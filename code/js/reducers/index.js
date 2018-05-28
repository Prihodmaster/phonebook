import {combineReducers} from 'redux';
import PhonesReducers from './phonebook'

const allReducers = combineReducers ({
    phones: PhonesReducers
})

export default allReducers;