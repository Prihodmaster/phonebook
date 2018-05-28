import React, {Component} from 'react';
import {connect} from 'react-redux';



class Details extends Component{
    render(){console.log(this.props);
        return(
            !this.props.phone ? <div className="details-item">Select from the list...</div>:
                <div className="details-item">
                    <div className={"general"}>
                        <div className={"general-avatar"}>
                            <img src={this.props.phone.avatar} alt="фото"/>
                        </div>
                        <div className={"general-text"}>
                            <p>First name: {this.props.phone.firstName}</p>
                            <p>Last name: {this.props.phone.lastName}</p>
                        </div>
                    </div>
                    <div className={"job"}>
                        <p>Company: {this.props.phone.company}</p>
                    </div>
                    <div className={"contact"}>
                        <p>Email: {this.props.phone.email}</p>
                        <p>Phone: {this.props.phone.phone}</p>
                    </div>
                </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        phone: state.active
    };
}

export default connect (mapStateToProps)(Details);