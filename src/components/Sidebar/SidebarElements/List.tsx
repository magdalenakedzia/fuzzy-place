function List() {
    const menu = [
        { field: "Home", link: "/" },
        { field: "Library", link: "/library" },
        { field: "Potions", link: "/potions" },
        { field: "Battlefield", link: "/battlefield" },
        { field: "Adventures", link: "/adventures" },
        { field: "Shop", link: "/shop" },
    ]
    return (
        <ul>
            {menu.map(element => (
                <li>
                    <a className="sidebar-nav-link" href="#0">
                        <span>{element.field}</span>
                    </a>
                </li>
            ))}

        </ul>

    );
}

export default List;