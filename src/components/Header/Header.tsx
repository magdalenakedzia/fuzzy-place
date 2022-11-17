import './styles.less';

function Header() {
    return (
        <div className="main-header">
            <h1 className="logo">
                Fuzzy place
            </h1>
            <nav>
                <button>Home</button>
                <button>About</button>
            </nav>
        </div>
    );
}

export default Header;
