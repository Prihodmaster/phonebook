import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import Details from '../containers/details';

let inputField='';
class PhoneList extends Component{
    constructor(props) {
        super(props);
        this.state = {filteredList: this.props.phones};
    }
    render() {
        return(
            <div className="ui grid main">
                <div className="one wide column"></div>
                <div className="four wide column clients-list">
                    <input className="search" type="text" placeholder="Search..." value={inputField} onChange={
                        (e)=>{
                            inputField = e.target.value;
                            this.setState({filteredList: this.props.phones.filter(
                                    function(item){
                                        if(item.firstName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1){return true};
                                        if(item.lastName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1){return true};
                                    }
                                )})
                        }
                    } />
                    <ul>
                        {
                            this.state.filteredList.map((item, i) => {
                                return(
                                    <li className="list-item" onClick={() => this.props.select (item)} key={i}>
                                    <div className="list-item-img"><img src={item.avatar} alt="фото" /></div>
                                    <div className="list-item-text">
                                        <p>{item.firstName}<br/><span className="conpany">{item.lastName}</span></p>
                                    </div>
                                </li>
                                )
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({select: select, dispatch})
}
export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);