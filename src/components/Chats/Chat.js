import ellipsis from '../../icons/ellipsis.svg';
import video from '../../icons/video.svg';
import edit from '../../icons/edit.svg';
import "./Chat.scss";
function Chat() {
    return (
        <section className="chat">
            <div className="chat-header">
                <div className="chat-me">
                    <div>
                        
                    </div>
                </div>
                <h1 className="chat-title">Chats</h1>
                <nav className="chat-nav">
                    <ul className="chat-nav-list">
                        <li className="chat-nav-item">
                            <a href="!#" className="chat-nav-link"><img src={ellipsis} alt=""/></a>
                        </li>
                        <li className="chat-nav-item">
                            <a href="!#" className="chat-nav-link"><img alt="" src={video}/></a>
                        </li>
                        <li className="chat-nav-item">
                            <a href="!#" className="chat-nav-link"><img alt="" src={edit} /></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="chat-search">
                <form action="#" className="chat-form">
                    <div className="chat-form-div">
                        <input type="text" className="chat-form-input" placeholder="Search Messanger"/>
                    </div>
                </form>
            </div>
            <div className="chat-heads">
                <ul className="chat-list">
                    <li className="chat-list-item current-chat">
                        <div className="chat-avatar">
                            <div></div>
                        </div>
                        <div className="chat-text">
                            <h4 className="chat-name">John Doe</h4>
                            <p className="chat-message">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                    <li className="chat-list-item">
                        <div className="chat-avatar">
                            <div></div>
                        </div>
                        <div className="chat-text">
                            <h4 className="chat-name">Jane Doe</h4>
                            <p className="chat-message">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                    <li className="chat-list-item">
                        <div className="chat-avatar">
                            <div></div>
                        </div>
                        <div className="chat-text">
                            <h4 className="chat-name">John Doe</h4>
                            <p className="chat-message">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                </ul>
            </div>            
        </section>
    )
}

export default Chat
