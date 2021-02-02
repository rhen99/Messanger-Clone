import './Options.scss';
import down from '../../icons/down.svg';
function Options() {
    return (
        <section className="options">
            <header className="options-header">
                <div className="options-header-avatar">
                    <div></div>
                </div>
                <h1 className="options-header-name">John Doe</h1>
            </header>
            <nav className="options-nav">
                <ul className="options-nav-list">
                    <li className="options-nav-item">
                        <a href="!#">
                            Customize Chat
                            <img src={down} alt=""/>
                        </a>
                    </li>
                    <li className="options-nav-item">
                        <a href="!#">
                            Privacy & Support
                            <img src={down} alt=""/>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Options
