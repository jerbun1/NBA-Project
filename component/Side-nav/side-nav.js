import Link from "next/link";
import { useState } from "react";


//Side navigation Component 
const SideNav = (props) => {
  // const globalState = useStateContext();      //set the state of the component 
  const [sideNavOpen, setSideNavOpenAction] = useState(false);

  return (
    <div
      className={`side-nav ${sideNavOpen ? "side-nav-active" : ""}`}
    >
      <div
        className="side-nav_close-btn"
        onClick={() => setSideNavOpenAction(false)}
      >
        <i className="fa fa-window-close" aria-hidden="true"></i>
      </div>
      <ul className="side-nav-main">
        <Link href="/" onClick={() => setSideNavOpenAction(false)}>
            <a>Home</a>
        </Link>
        <div className="side-nav-divider" />

        <Link href="/Roster" onClick={() => setSideNavOpenAction(false)}>
            <a>Teams</a>
        </Link>
        {/* <div className="side-nav-divider" />

        <Link href="/player" onClick={() => setSideNavOpenAction(false)}>
          <li href="/">
            <a>Players</a>
          </li>
        </Link> */}
      </ul>
      
    </div>
  );
};
export default SideNav;
