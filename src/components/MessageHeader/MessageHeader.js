import video from "../../icons/video_call.svg";
import call from "../../icons/call.svg";
import info from "../../icons/info.svg";
import "./MessageHeader.scss";
function MessageHeader() {
    return (
        <header className="header">
            <div className="header-avatar">
                <div></div>
            </div>
            <h1 className="header-name">John Doe</h1>
            <div className="header-options">
                <ul className="header-options-list">
                    <li className="header-options-item">
                        <a href="!#">
                            <img src={call} alt=""/>
                        </a>
                    </li>
                    <li className="header-options-item">
                        <a href="!#">
                            <img src={video} alt=""/>
                        </a>
                    </li>
                    <li className="header-options-item">
                        <a href="!#">
                            <img src={info} alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default MessageHeader
