import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import Details from '../containers/details';

class PhoneList extends Component{
    render() {console.log(this.props);
        return(
            <div className="ui grid main">
                <div className="one wide column"></div>
                <div className="four wide column clients-list">
                    <input className="search" type="text" placeholder="Search..." />
                    <ul>
                        {
                            this.props.phones.map((item, i) => {
                                return(<li className="list-item" onClick={() => this.props.select (item)} key={i}>
                                    <div className="list-item-img"><img src={item.avatar} alt="фото" /></div>
                                    <div className="list-item-text">
                                        <p>{item.firstName}<br/><span className="conpany">{item.lastName}</span></p>
                                    </div>
                                </li>)
                        })
                        }
                    </ul>
                </div>
                <div className="ten wide column clients-details">
                    <Details />
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