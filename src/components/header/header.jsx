import myImg from "./logo.svg";
import cartLogo from "./cart-logo.svg";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
// import style from "../home/home.module.css";
export default function Header() {
  const [itemCounter, setItemCounter] = useState(0);
  const [items, setItems] = useState([]);
  // console.log(item);
  return (
    <>
      <header>
        <div className="logo">
          <img src={myImg} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Products</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </nav>
        <div className="cart-logo">
          <div className="itemCounter">{itemCounter}</div>
          <Link to="cart">
            <img src={cartLogo} alt="" />
          </Link>
        </div>
      </header>
      <Outlet context={[items, setItems, itemCounter, setItemCounter]} />
    </>
  );
}
