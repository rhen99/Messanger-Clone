import "./MessageContainer.scss";
function MessageContainer() {
    return (
        <section className="message-container">
            <div className="message-intro">
                <div className="message-intro-avatar">
                    <div></div>
                </div>
                <h1 className="message-intro-name">John Doe</h1>
            </div>
            <div className="message-conversation">
                <div className="message-mine">
                <div className="message-mine-text">
                    <p className="message-mine-bubble">
                    Hello World
                    </p>
                    <img className="message-mine-mark" src="" alt=""/>
                </div>
            </div>
            <div className="message-friend">
                <div className="message-friend-avatar">
                    <div></div>
                </div>
                <div className="message-friend-text">
                    <p className="message-friend-bubble">
                        Hi
                    </p>
                    <img src="" alt="" className="message-friend-mark"/>
                </div>
            </div>
            </div>
        </section>
    )
}

export default MessageContainer
