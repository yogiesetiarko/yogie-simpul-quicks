import React, { useEffect } from "react";
// import { Navbar, Dropdown, ItemListDropdown, Image } from "react-web-skeleton";
import { Outlet } from "react-router-dom";
// import { ChildRoutes } from "../route";
// import "./Layout.scss";
import {
  IconSearch,
  IconUser,
  ArrowLeftSign,
  CloseSign,
} from "../../assets";
import ThreeDotsComp from "../Comp/ThreeDotsComp";

// import ThreeDotsComp from "../Comp/ThreeDotsComp";
// import Loader from 'react-spinner-loader';

// import DummyWords from "../CompPages/Translate/dummy-words.json";
// import TextTranslate from "../CompPages/Translate/TextTranslate";

export default function Layout () {
  // const { pathname } = useLocation();
  const [openBlueNav, setOpenBlueNav] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [detailChat, setDetailChat] = React.useState(false);
  const [selectedChatObject, setSelectedChatObject] = React.useState(null);
  const [chatMessage, setChatMessage] = React.useState("");
  const [addMessage, setAddMessage] = React.useState([]);
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

  const removeLoading = () => {
    setLoading(false);
    // setDetailChat(true);
  };

  const onClickChat = (chatObject = null) => {
    if (chatObject !== null) {
      setSelectedChatObject(chatObject);
    }

    setDetailChat((prev) => !prev);
  };

  const onClickBack = () => {
    setDetailChat(false);
  };

  const changeMessage = (e) => {
    setChatMessage(e.target.value);
  };

  const clickSend = () => {
    let tempMessage = addMessage;
    tempMessage.push(chatMessage);
    setAddMessage([...tempMessage]);
    setChatMessage("");
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
        {/* White Screen */}
        {chatSelected || taskSelected ? (<>
          <div className="layer-content flex flex-col h-screen overflow-hidden">
            {/* Chat */}
            {chatSelected ? (<>
            </>) : null}
            {detailChat ? (
              <>
                <header className="w-full text-center border-b border-grey p-[10px]">
                  <div
                    className="w-full flex"
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex items-center">
                      <div
                        onClick={() => onClickBack()}
                        className="image-item-chat cursor-pointer"
                      >
                        <div className="flex relative" style={{}}>
                          <ArrowLeftSign height="24" />
                        </div>
                      </div>
                      <div
                        className="container-info-chat"
                        style={{ marginLeft: "17px" }}
                      >
                        <div className="flex items-center">
                          <div className="text-left">
                            <div className="flex items-center">
                              <div
                                style={{
                                  color: "#2F80ED",
                                  fontSize: "14px",
                                  maxWidth: "400px",
                                }}
                              >
                                {selectedChatObject.title}
                              </div>
                            </div>
                            <div
                              style={{
                                color: "#4F4F4F",
                                fontSize: "14px",
                              }}
                            >
                              3 Participants
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div
                        onClick={() => onClickBack()}
                        className="container-status-dot cursor-pointer"
                        style={
                          {
                            // height: "10px",
                            // width: "10px",
                            // backgroundColor: "red",
                            // borderRadius: "25px"
                          }
                        }
                      >
                        <CloseSign height="14" />
                      </div>
                    </div>
                  </div>
                </header>
              </>
            ) : (
              <>
                <header className="w-full text-center border-b border-grey pl-[29px] pr-[39px] pt-[20px] pb-[20px]">
                  <div className="input-search ml-2 h-[58px]">
                    <div className="p-1 flex rounded duration-300 cursor-pointer text-white chat-input-search">
                      <input
                        type="text"
                        placeholder="Search"
                        className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                      />
                      <IconSearch className="icon-input-search-chat" />
                    </div>
                  </div>
                </header>
              </>
            )}


            {taskSelected ? null : null}

            

            {/* Task */}

            <main className="flex-1 overflow-y-scroll pl-[34px] pr-[34px] pt-[15px] pb-[15px]">
              {loading ? (
                <>
                  <div className="flex justify-center h-full flex-col">
                    <div
                      className="loadingSpinner"
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                        style={{
                          color: "#C4C4C4",
                        }}
                      >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                      <div onClick={() => removeLoading()}>Loading Chats...</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {detailChat ? (
                    <>
                      <div>
                        <div className="my-baloon flex justify-end mt-[15px] mb-[15px]">
                          <div>
                            <div
                              className="flex justify-end"
                              style={{
                                color: "#9B51E0",
                              }}
                            >
                              You
                            </div>
                            <div className="flex items-start">
                              <div className="three-dot cursor-pointer">
                                <ThreeDotsComp />
                              </div>
                              <div className="box-chat-me">
                                <div
                                  style={{
                                    margin: "10px",
                                    color: "#4F4F4F",
                                    fontSize: "12px",
                                  }}
                                >
                                  Ini Chat ku
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="date-mark"
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              top: "13px",
                              background: "#fff",
                              color: "#4F4F4F",
                              display: "inline-block",
                              padding: "0 20px",
                            }}
                          >
                            Today June 09, 2021
                          </div>
                          <div
                            className=""
                            style={{
                              height: "1px",
                              background: "#4F4F4F",
                            }}
                          ></div>
                        </div>

                        <div className="their-baloon flex justify-start mt-[15px] mb-[15px]">
                          <div>
                            <div
                              className="flex"
                              style={{
                                color: "#E5A443",
                              }}
                            >
                              Mereka
                            </div>
                            <div className="flex">
                              <div className="box-chat-theirs">
                                <div
                                  style={{
                                    margin: "10px",
                                    color: "#4F4F4F",
                                    fontSize: "12px",
                                  }}
                                >
                                  Ini Chat mereka
                                </div>
                              </div>
                              <div className="three-dot cursor-pointer">
                                <ThreeDotsComp />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="new-messages-mark"
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              top: "13px",
                              background: "#fff",
                              color: "#EB5757",
                              display: "inline-block",
                              padding: "0 20px",
                            }}
                          >
                            New Message
                          </div>
                          <div
                            className=""
                            style={{
                              height: "1px",
                              background: "#EB5757",
                            }}
                          ></div>
                        </div>

                        <div className="my-baloon flex justify-end mt-[15px] mb-[15px]">
                          <div>
                            <div
                              className="flex justify-end"
                              style={{
                                color: "#9B51E0",
                              }}
                            >
                              You
                            </div>
                            <div className="flex items-start">
                              <div className="three-dot cursor-pointer">
                                <ThreeDotsComp />
                              </div>
                              <div className="box-chat-me">
                                <div
                                  style={{
                                    margin: "10px",
                                    color: "#4F4F4F",
                                    fontSize: "12px",
                                  }}
                                >
                                  Ini Chat ku
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="their-baloon flex justify-start mt-[15px] mb-[15px]">
                          <div>
                            <div
                              className="flex"
                              style={{
                                color: "#E5A443",
                              }}
                            >
                              Mereka
                            </div>
                            <div className="flex">
                              <div className="box-chat-theirs">
                                <div
                                  style={{
                                    margin: "10px",
                                    color: "#4F4F4F",
                                    fontSize: "12px",
                                  }}
                                >
                                  Ini Chat mereka
                                </div>
                              </div>
                              <div className="three-dot cursor-pointer">
                                <ThreeDotsComp />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="their-baloon flex justify-start mt-[15px] mb-[15px]">
                          <div>
                            <div
                              className="flex"
                              style={{
                                color: "#43B78D",
                              }}
                            >
                              Mereka2
                            </div>
                            <div className="flex">
                              <div
                                className="box-chat-theirs"
                                style={{ backgroundColor: "#D2F2EA" }}
                              >
                                <div
                                  style={{
                                    margin: "10px",
                                    color: "#4F4F4F",
                                    fontSize: "12px",
                                  }}
                                >
                                  Ini Chat mereka2
                                </div>
                              </div>
                              <div className="three-dot cursor-pointer">
                                <ThreeDotsComp />
                              </div>
                            </div>
                          </div>
                        </div>

                        {addMessage.length > 0 ? (
                          <>
                            {addMessage.map((item, index) => {
                              return (
                                <React.Fragment key={`${index}`}>
                                  <div className="my-baloon flex justify-end mt-[15px] mb-[15px]">
                                    <div>
                                      <div
                                        className="flex justify-end"
                                        style={{
                                          color: "#9B51E0",
                                        }}
                                      >
                                        You
                                      </div>
                                      <div className="flex items-start">
                                        <div className="three-dot cursor-pointer">
                                          <ThreeDotsComp />
                                        </div>
                                        <div className="box-chat-me">
                                          <div
                                            style={{
                                              margin: "10px",
                                              color: "#4F4F4F",
                                              fontSize: "12px",
                                            }}
                                          >
                                            {item}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </React.Fragment>
                              );
                            })}
                          </>
                        ) : null}

                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() =>
                          onClickChat({ title: "109220-Naturalization" })
                        }
                        className="cursor-pointer w-full border-b border-grey flex pt-[22px] pb-[22px]"
                        style={{
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="flex">
                          <div className="image-item-chat">
                            <div
                              className="flex relative"
                              style={{ width: "50px" }}
                            >
                              <div
                                style={{
                                  height: "34px",
                                  width: "34px",
                                  backgroundColor: "#E0E0E0",
                                  borderRadius: "25px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <IconUser
                                  style={{
                                    color: "4F4F4F",
                                  }}
                                />
                              </div>
                              <div
                                className="absolute right-0"
                                style={{
                                  height: "34px",
                                  width: "34px",
                                  backgroundColor: "#2F80ED",
                                  borderRadius: "25px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <IconUser style={{ color: "white" }} />
                              </div>
                            </div>
                          </div>
                          <div
                            className="container-info-chat"
                            style={{ marginLeft: "17px" }}
                          >
                            <div className="flex items-center">
                              <div>
                                <div className="flex items-center">
                                  <div
                                    style={{
                                      color: "#2F80ED",
                                      fontSize: "14px",
                                      maxWidth: "400px",
                                    }}
                                  >
                                    109220-Naturalization
                                  </div>
                                  <div
                                    style={{
                                      color: "#4F4F4F",
                                      fontSize: "12px",
                                      marginLeft: "16px",
                                    }}
                                  >
                                    January 1,2021 19:10
                                  </div>
                                </div>
                                <div
                                  style={{
                                    color: "#4F4F4F",
                                    fontSize: "14px",
                                    fontWeight: 800,
                                  }}
                                >
                                  Cameron Phillips :
                                </div>
                                <div
                                  style={{
                                    color: "#4F4F4F",
                                    fontSize: "14px",
                                  }}
                                >
                                  Please Check this out!
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div
                            className="container-status-dot"
                            style={{
                              height: "10px",
                              width: "10px",
                              backgroundColor: "red",
                              borderRadius: "25px",
                            }}
                          ></div>
                        </div>
                      </div>

                      <div
                        onClick={() =>
                          onClickChat({
                            title:
                              "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
                          })
                        }
                        className="cursor-pointer w-full border-b border-grey flex pt-[22px] pb-[22px]"
                        style={{
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="flex">
                          <div className="image-item-chat">
                            <div
                              className="flex relative"
                              style={{ width: "50px" }}
                            >
                              <div
                                style={{
                                  height: "34px",
                                  width: "34px",
                                  backgroundColor: "#E0E0E0",
                                  borderRadius: "25px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <IconUser
                                  style={{
                                    color: "4F4F4F",
                                  }}
                                />
                              </div>
                              <div
                                className="absolute right-0"
                                style={{
                                  height: "34px",
                                  width: "34px",
                                  backgroundColor: "#2F80ED",
                                  borderRadius: "25px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <IconUser style={{ color: "white" }} />
                              </div>
                            </div>
                          </div>
                          <div
                            className="container-info-chat"
                            style={{ marginLeft: "17px" }}
                          >
                            <div className="flex items-center">
                              <div>
                                <div className="flex items-center">
                                  <div
                                    style={{
                                      color: "#2F80ED",
                                      fontSize: "14px",
                                      maxWidth: "400px",
                                    }}
                                  >
                                    Jeannette Moraima Guaman Chamba (Hutto I-589)
                                    [ Hutto Follow Up - Brief Service ]
                                  </div>
                                  <div
                                    style={{
                                      color: "#4F4F4F",
                                      fontSize: "12px",
                                      marginLeft: "16px",
                                    }}
                                  >
                                    02/06/2021 10:45
                                  </div>
                                </div>
                                <div
                                  style={{
                                    color: "#4F4F4F",
                                    fontSize: "14px",
                                    fontWeight: 800,
                                  }}
                                >
                                  Ellen :
                                </div>
                                <div
                                  style={{
                                    color: "#4F4F4F",
                                    fontSize: "14px",
                                  }}
                                >
                                  Hey, please read.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div
                            className="container-status-dot"
                            style={{
                              height: "10px",
                              width: "10px",
                              backgroundColor: "red",
                              borderRadius: "25px",
                            }}
                          ></div>
                        </div>
                      </div>

                      <div
                        onClick={() =>
                          onClickChat({ title: "8405-Diana SALAZAR MUNGUIA" })
                        }
                        className="cursor-pointer w-full border-b border-grey flex pt-[22px] pb-[22px]"
                        style={{
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="flex">
                          <div className="image-item-chat">
                            <div
                              className="flex relative"
                              style={{ width: "50px" }}
                            >
                              <div
                                style={{
                                  height: "34px",
                                  width: "34px",
                                  backgroundColor: "#E0E0E0",
                                  borderRadius: "25px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <IconUser
                                  style={{
                                    color: "4F4F4F",
                                  }}
                                />
                              </div>
                              <div
                                className="absolute right-0"
                                style={{
                                  height: "34px",
                                  width: "34px",
                                  backgroundColor: "#2F80ED",
                                  borderRadius: "25px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <IconUser style={{ color: "white" }} />
                              </div>
                            </div>
                          </div>
                          <div
                            className="container-info-chat"
                            style={{ marginLeft: "17px" }}
                          >
                            <div className="flex items-center">
                              <div>
                                <div className="flex items-center">
                                  <div
                                    style={{
                                      color: "#2F80ED",
                                      fontSize: "14px",
                                      maxWidth: "400px",
                                    }}
                                  >
                                    8405-Diana SALAZAR MUNGUIA
                                  </div>
                                  <div
                                    style={{
                                      color: "#4F4F4F",
                                      fontSize: "12px",
                                      marginLeft: "16px",
                                    }}
                                  >
                                    01/06/2021 12:19
                                  </div>
                                </div>
                                <div
                                  style={{
                                    color: "#4F4F4F",
                                    fontSize: "14px",
                                    fontWeight: 800,
                                  }}
                                >
                                  Cameron Phillips :
                                </div>
                                <div
                                  style={{
                                    color: "#4F4F4F",
                                    fontSize: "14px",
                                  }}
                                >
                                  I understand your initial concerns and thats
                                  very valid, Elizabeth. But you ...
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div
                            className="container-status-dot"
                            style={{
                              height: "10px",
                              width: "10px",
                              backgroundColor: "red",
                              borderRadius: "25px",
                            }}
                          ></div>
                        </div>
                      </div>

                      <div
                        onClick={() => onClickChat({ title: "FastVisa Support" })}
                        className="cursor-pointer w-full border-b border-grey flex pt-[22px] pb-[22px]"
                        style={{
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="flex">
                          <div className="image-item-chat">
                            <div
                              className="flex relative"
                              style={{ width: "50px" }}
                            >
                              <div
                                className="absolute right-0"
                                style={{
                                  height: "34px",
                                  width: "34px",
                                  backgroundColor: "#2F80ED",
                                  borderRadius: "25px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <IconUser style={{ color: "white" }} />
                              </div>
                            </div>
                          </div>
                          <div
                            className="container-info-chat"
                            style={{ marginLeft: "17px" }}
                          >
                            <div className="flex items-center">
                              <div>
                                <div className="flex items-center">
                                  <div
                                    style={{
                                      color: "#2F80ED",
                                      fontSize: "14px",
                                      maxWidth: "400px",
                                    }}
                                  >
                                    FastVisa Support
                                  </div>
                                  <div
                                    style={{
                                      color: "#4F4F4F",
                                      fontSize: "12px",
                                      marginLeft: "16px",
                                    }}
                                  >
                                    01/06/2021 12:19
                                  </div>
                                </div>
                                <div
                                  style={{
                                    color: "#4F4F4F",
                                    fontSize: "14px",
                                  }}
                                >
                                  Hey there! Welcome to your inbox.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div
                            className="container-status-dot"
                            style={{
                              height: "10px",
                              width: "10px",
                              backgroundColor: "red",
                              borderRadius: "25px",
                            }}
                          ></div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </main>

            {detailChat ? (
              <>
                <footer className="w-full text-center border-t border-grey p-4">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="flex rounded duration-300 cursor-pointer text-white chat-input-search col-span-5">
                      <input
                        type="text"
                        placeholder="Type a new message"
                        className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                        value={chatMessage}
                        onChange={(e) => changeMessage(e)}
                        name="message"
                      />
                    </div>
                    <div
                      className="flex"
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        onClick={clickSend}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </footer>
              </>
            ) : null}
          </div>
        </>) : null}

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
