// import myImg from "./logo.svg";
// import cartLogo from "./cart-logo.svg";
// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./home.module.css";

export default function Home() {
  return (
    <>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, error
          quo! Enim, laudantium similique blanditiis corrupti est aspernatur
          dolore molestias!
        </p>
        <Link to="shop">View collection</Link>
      </main>
    </>
  );
}
