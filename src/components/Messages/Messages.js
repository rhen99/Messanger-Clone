import MessageHeader from '../MessageHeader/MessageHeader';
import MessageContainer from '../MessageContainer/MessageContainer';
import MessageForm from '../MessageForm/MessageForm';
import "./Messages.scss";
function Messages() {
    return (
        <section className="conversation">
            <MessageHeader/>
            <MessageContainer/>
            <MessageForm/>
        </section>
    )
}

export default Messages
