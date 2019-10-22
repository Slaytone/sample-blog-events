import React from "react";
import "./header.css";

class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "header">
                <h1> Custom blog {this.props.loginName}</h1>
            </div>
        )
    }
}

export default Header;