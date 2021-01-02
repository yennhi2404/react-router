import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Giới thiệu",
    to: "/about",
    exact: false,
  },
  {
    name: "Liên hệ",
    to: "/contact",
    exact: false,
  },
  {
    name: "Sản phẩm",
    to: "/products",
    exact: false,
  },
  {
    name: "Đăng nhập",
    to: "/login",
    exact: false,
  },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active abc" : "";
        return (
          <li className={`my-li ${active}`}>
            <Link
              //activeStyle={{ backgroundColor: "white", color: "red" }}
              //activeClassName="active"
              to={to}
              className="my-link"
            >
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

function Menu() {
  return (
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">{showMenus(menus)}</ul>
    </nav>
  );
}

const showMenus = (menus) => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
        />
      );
    });
  }
  return result;
};

export default Menu;
