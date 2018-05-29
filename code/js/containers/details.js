import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{
    render(){
        return(
            this.props.informationClient===true&&this.props.data!==undefined ?
                <div className="details-item">
                    <div className={"general"}>
                        <div className={"general-avatar"}>
                            <img src={this.props.data.avatar} alt="фото"/>
                        </div>
                        <div className={"general-text"}>
                            <p>First name: {this.props.data.firstName}</p>
                            <p>Last name: {this.props.data.lastName}</p>
                        </div>
                    </div>
                    <div className={"job"}>
                        <p>Company: {this.props.data.company}</p>
                    </div>
                    <div className={"contact"}>
                        <p>Email: {this.props.data.email}</p>
                        <p>Phone: {this.props.data.phone}</p>
                    </div>
                </div>:
                <div className="details-item">Select from the list...</div>
        )
    }
}


function mapStateToProps(state) {
    return {
        phone: state.active
    };
}

export default connect (mapStateToProps)(Details);