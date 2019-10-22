import React from "react";
import "./authForm.css";

class AuthFrom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: ""
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(event){
        const content = event.target.value;
        // console.log(content);
        this.setState(() =>{
            return{
                content
            }
        })
    }

    handleFormSubmit(){
        const content = this.state.content;
        this.props.changeLoginName(content);
        this.props.changeInLogin();
    }

    render() {
        return (
            <div className="card auth-from">
                <div className="card-body">
                    <h5 className="card-title">Enter name</h5>
                    <p>
                        <input className="form-control" type="text" value={this.state.content} onChange={this.handleFormChange}/>
                    </p>
                    <button type="button" className="btn btn-info" onClick={this.handleFormSubmit}>Ok</button>
                </div>
            </div>
        );
    }
}

export default AuthFrom;