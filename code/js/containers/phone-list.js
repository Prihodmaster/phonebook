import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class PhoneList extends Component{
    render() {
        return(
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        )
    }
}
function mapStateToProps(state) {
    return{
        phones: state.phones
    };
}
export default connect(mapStateToProps)(PhoneList);