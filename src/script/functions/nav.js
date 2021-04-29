import { nav } from "../elements";

class Nav {

  static editNav() {
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }

}

export default Nav;
