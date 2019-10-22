import React from "react";
import "./createPost.css";


class CreatePost extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    handlePostChange(e){
        const content = e.target.value;
        this.setState( () => {
            return {
                content
            }
        })
    }

    handleSubmit(){
        this.props.addMsgs(this.state.content);
        this.setState( {
            content: ""
        })
    }

    render() {
        return (
            <div className="create-post">
                <div className="send-post">
                    <textarea
                        value={this.state.content}
                        onChange={this.handlePostChange}
                        placeholder="Tape message ..."
                    />
                    <button type="button" className="btn btn-warning" onClick={this.handleSubmit}>Send</button>
                </div>
            </div>
        );
    }


}

export default CreatePost;