import React, { Component } from 'react';
class Post extends Component {
    render(){
        return (
            <div className="Post">
                <div className="PostUser" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "400px" }}>
                    <img src={this.props.userPicSrc} alt="userPic" style={{ width: "50px", height: "50px", margin: "0px", borderRadius: "50%" }} />
                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: "flex-start", alignItems: "flex-start" }}>
                        <p className="PostUserName" style={{ fontSize: "15px", margin: '0px', padding: '2px' }}>{this.props.userName}</p>
                        <p className="Date" style={{ fontSize: "10px", margin: '0px', padding: '2px' }}>{Date()} </p>
                    </div>
                </div>
                <div className="PostContent" style={{ width: "350px", padding: "15px", }} >
                    <p className="PostText" style={{ fontSize: "10px", margin: '0px', padding: '2px', textAlign: "left" }}>{this.props.contentText}</p>
                    <img src={this.props.contentPic} style={{ width: 300 }} />
                    {/* <img src={`https://picsum.photos/${this.props.width}/${this.props.height}`} alt="random pic" style={{}} /> */}
                </div>
                <div className="PostBtn" style={{ display: "flex", flexDirection: "row", alignItems: "centerflex-", justifyContent: "center", width: "400px" }}>
                    <button style={{ width: "30%" }}>👍Like</button>
                    <button style={{ width: "30%" }}>💬Comment</button>
                    <button style={{ width: "30%" }}>✈Share</button>
                </div>

            </div>
        )
    }
}

export default Post;