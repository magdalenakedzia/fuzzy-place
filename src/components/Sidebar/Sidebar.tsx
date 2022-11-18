import 'material-icons/iconfont/material-icons.css';

import "./style.less";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="layout__sidebar">
                <a className="sidebar__trigger" href="#0">
                    <span className="material-icons menu">
                        menu
                    </span>
                </a>

                <nav className="sidebar__nav">
                    <ul>
                        <li>
                            <a className="sidebar__nav-link" href="#0">
                                <i className="fa fa-home"></i><em>Home</em>
                            </a>
                        </li>
                        <li>
                            <a className="sidebar__nav-link" href="#0">
                                <i className="fa fa-user"></i><em>My Profile</em>
                            </a>
                        </li>
                        <li>
                            <a className="sidebar__nav-link" href="#0">
                                <i className="fa fa-camera"></i><em>Camera</em>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;