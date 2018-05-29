import React, {Component} from 'react';
import {connect} from 'react-redux';
import Details from '../containers/details';

let inputField='';
class PhoneList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            filteredList: this.props.phones,
            index: 0,
            infClient: false
        };
    }
    press(i){
        this.setState({index: i, infClient: true})
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
                                    <li className="list-item" onClick={() => this.press (i)} key={i}>
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
                    <Details data={this.state.filteredList[this.state.index]} informationClient={this.state.infClient} />
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

export default connect(mapStateToProps)(PhoneList);
// import {select} from '../actions/index';
// import {bindActionCreators} from 'redux';
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({select: select, dispatch})
// }   При использовании mapDispatchToProps показывало ошибку: dispatch не является функцией, решить проблему не получилось, поэтому пришлось сделать отображение деталей через React (((