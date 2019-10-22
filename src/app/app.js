import React from "react";
import Header from "../header/header";
import AuthFrom from "../authForm/authForm";
import CreatePost from "../createPost/createPost";
import "./bootstrap.min.css";
import "./app.css";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inLogin: false,
            loginName: "",
            msgs:[]
        };
        this.changeInLogin = this.changeInLogin.bind(this);
        this.changeLoginName = this.changeLoginName.bind(this);
        this.addMsgs = this.addMsgs.bind(this);
        this.removeMsg = this.removeMsg.bind(this);
    }

    changeInLogin(){
        this.setState({
            inLogin: !this.state.inLogin
        })
    }

    changeLoginName(str){
        console.log(str);
        this.setState({
            loginName: (str)

        })
    }


    addMsgs(text){
        this.setState( oldState => {
                let arr = oldState.msgs;
                arr.push(text);
                return{
                    msgs: arr
                }
            }
        )
    }

    removeMsg(str){
        this.setState( oldState => {
                let arr = oldState.msgs;
                arr = arr.filter(el => str !== el);
                return{
                    msgs: arr
                }
            }
        )
    }


    createPage(){
        if (this.state.inLogin)
        {
            return(
                    <div>
                        <Header loginName={"of " + this.state.loginName}/>
                        <CreatePost addMsgs={this.addMsgs}/>
                        {this.state.msgs.map(
                                (el, index) =>
                                    <p className="text-message" key={index}> {el}
                                        <button type="button" className="close app" aria-label="close" onClick={() => this.removeMsg(el)}>
                                        <span aria-hidden>&times;</span></button>
                                    </p>
                            )}
                    </div>
                );
        } else {
            return(
                <div>
                    <Header/>
                    <AuthFrom changeInLogin={this.changeInLogin} changeLoginName = {this.changeLoginName}/>
                </div>
            );
        }

    }


    render() {
         return (
        this.createPage()
    );
    }


}

export default App;