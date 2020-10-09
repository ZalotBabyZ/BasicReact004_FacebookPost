import React, { Component } from 'react';
class MyPost extends Component {
    render() {
        return (
            <div className="MyPost">
                <form>
                    <div className="PostBox" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "400px" }}>
                        <img src={this.props.userPicSrc} alt="user pic" style={{ width: "50px", height: "50px", margin: "0px", borderRadius: "50%" }} />

                        <input type="text" placeholder={`What's on your mind, ${this.props.userName}?`} style={{ width: "3200px", padding: "5px" }}></input>

                    </div>
                    <div className="MyPostBtn" style={{ display: "flex", flexDirection: "row", alignItems: "centerflex-", justifyContent: "flex-end", width: "400px" }}>
                        <button style={{ width: "80px" }}>POST</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default MyPost;