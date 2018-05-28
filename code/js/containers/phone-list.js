import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class PhoneList extends Component{
    render() {
        return(
            <ul>
                {
                    this.props.phones.map((item, i) => {
                        return(<li key={i} index={i}>{item.phone}</li>)
                })
                }
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