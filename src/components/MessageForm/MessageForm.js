import "./MessageForm.scss";
import image from '../../icons/image.svg';
import emoji from '../../icons/emoji.svg';
import like from '../../icons/like.svg';
//import send from '../../icons/send.svg';
function MessageForm() {
    return (
        <section className="message-box">
            <nav className="message-box-nav">
                <ul className="message-box-list">
                    <li className="message-box-item">
                        <a href="!#">
                            <img src={image} alt=""/>
                        </a>
                    </li>
                    <li className="message-box-item">
                        <a href="!#">
                            <img src={emoji} alt=""/>
                        </a>
                    </li>
                </ul>
            </nav>
            <form action="#" className="message-box-form">
                <div className="message-box-div">
                    <input name="message" id="" className="message-box-input" placeholder="Write your message here..."/>
                </div>
                <div className="message-box-div">
                    <button type="submit" className="message-box-submit"><img src={like} alt=""/></button>
                </div>
            </form>
        </section>
    )
}

export default MessageForm
