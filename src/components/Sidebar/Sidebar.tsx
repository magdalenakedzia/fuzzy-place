import 'material-icons/iconfont/material-icons.css';
import { Avatar } from './SidebarElements/Avatar';
import List from "./SidebarElements/List"
import "./style.less";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="layout-sidebar">
                <a className="sidebar-trigger" href="#0">
                    <span className="material-icons menu">
                        menu
                    </span>
                </a>

                <nav className="sidebar-nav">
                    <Avatar />
                    <List />
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;