import {combineReducers} from 'redux';
import PhonesReducers from './phonebook'
import ActivePhone from './phone-active'

const allReducers = combineReducers ({
    phones: PhonesReducers,
    active: ActivePhone
})

export default allReducers;