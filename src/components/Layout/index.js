import React, { useEffect } from "react";
// import { Navbar, Dropdown, ItemListDropdown, Image } from "react-web-skeleton";
import { Outlet } from "react-router-dom";
// import { ChildRoutes } from "../route";
// import "./Layout.scss";
import {
  IconSearch,
} from "../../assets";
import ScreenChat from "../Comp/ScreenChat";
import ScreenTask from "../Comp/ScreenTask";

// import DummyWords from "../CompPages/Translate/dummy-words.json";
// import TextTranslate from "../CompPages/Translate/TextTranslate";

export default function Layout () {
  // const { pathname } = useLocation();
  const [openBlueNav, setOpenBlueNav] = React.useState(false);
  const [chatSelected, setChatSelected] = React.useState(false);
  const [taskSelected, setTaskSelected] = React.useState(false);

  // const [openChat, setOpenChat] = React.useState(false);

  // const isHomePage = useMemo(() => {
  //   if (pathname === "/") return true;
  //   else return false;
  // }, [pathname]);

  useEffect(() => {
    // localStorage.setItem("word_list", JSON.stringify(DummyWords));
  }, []);

  const clickBlueNav = () => {
    setOpenBlueNav((prev) => !prev);
  };

  const clickChatNav = () => {
    if(taskSelected) {
      setTaskSelected(false);
    } 
    // else {
    //   setTaskSelected(true);
    // }
    setChatSelected((prev) => !prev);
  };

  const clickTaskNav = () => {
    if(chatSelected) {
      setChatSelected(false);
    } 
    else {
      // setChatSelected(false);
    }
    setTaskSelected((prev) => !prev);
  };

  return (
    <>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center z-9999">
      </div>
      <div className="searchbar pl-[300px]">
        <div className="input-search ml-2 h-[58px]">
          <div className="p-2.5 flex rounded-md px-4 duration-300 cursor-pointer text-white container-input-search">
            <IconSearch />
            <input
              type="text"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="pl-[300px] mt-2 ml-2">
        <Outlet />
      </div>

      <div className="fixed bottom-5 right-5">
        {/* Chat Screen */}
        {chatSelected ? (<><ScreenChat /></>) : null}

        {/* Task Screen */}
        {taskSelected ? (<><ScreenTask /></>) : null}

        {/* Bottom button */}
        <div className="container-nav-bottom-right">
          {openBlueNav ? (
            <React.Fragment>
              {taskSelected ? null : (<>
                <div 
                  className="item-icon-bottom"
                  onClick={() => clickTaskNav()}
                >
                  <img
                    className="z-9999"
                    src={require("../../assets/img/Group-1670.png")}
                    alt=""
                  />
                </div>
              </>)}

              {chatSelected ? null : (<>
                <div
                  className="item-icon-bottom"
                  onClick={() => clickChatNav()}
                >
                  <img
                    className="z-9999"
                    src={require("../../assets/img/Group-1669.png")}
                    alt=""
                  />
                </div>
              </>)}
            </React.Fragment>
          ) : null}

          {taskSelected ? (<>
            <div className="item-icon-bottom" onClick={() => clickTaskNav()}>
              <img
                className="z-9999"
                src={require("../../assets/img/Group-1707.png")}
                alt=""
              />
            </div>          
          </>) : null}

          {chatSelected ? (<>
            <div className="item-icon-bottom" onClick={() => clickChatNav()}>
              <img
                className="z-9999"
                src={require("../../assets/img/Group-1904.png")}
                alt=""
              />
            </div>
          </>) : null}

          {chatSelected || taskSelected ? null : (<>
            <div className="item-icon-bottom" onClick={() => clickBlueNav()}>
              <img
                className="z-9999"
                src={require("../../assets/img/Group-1658.png")}
                alt=""
              />
            </div>
          </>)}
        </div>
      </div>
    </>
  );
}
