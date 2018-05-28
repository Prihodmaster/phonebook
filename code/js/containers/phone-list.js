import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class PhoneList extends Component{
    render() {
        return(
            <div className="ui grid main">
                <div className="one wide column"></div>
                <div className="four wide column clients-list">
                    <input className="search" type="text" placeholder="Search..." />
                    <ul>
                        {
                            this.props.phones.map((item, i) => {
                                return(<li onClick={() => this.props.select (item)} key={i}>{item.firstName}</li>)
                        })
                        }
                    </ul>
                </div>
                <div className="ten wide column clients-details">

                </div>
                <div className="one wide column"></div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        phones: state.phones
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select, dispatch})
}
export default connect(mapStateToProps, matchDispatchToProps)(PhoneList);