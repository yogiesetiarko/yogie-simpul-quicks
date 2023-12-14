import React from 'react';

import {
  IconSearch,
  ArrowLeftSign,
  CloseSign,
} from "../../assets";
import ThreeDotsComp from "./ThreeDotsComp";
import ChatItem from './ChatItem';
import DummyChat from "../Layout/dummy-chat.json";
import DummyHeaderChat from "../Layout/dummy-header-chat.json";
import LoadingElem from './LoadingElem';
import ChatHeaderItem from './ChatHeaderItem';

const ScreenChat = () => {

  const [loading, setLoading] = React.useState(true);
  const [chatMessage, setChatMessage] = React.useState("");
  const [replyMessage, setReplyMessage] = React.useState("");
  const [replyMessageName, setReplyMessageName] = React.useState("");
  const [addMessage, setAddMessage] = React.useState([]);
  const [detailChat, setDetailChat] = React.useState(false);
  const [selectedChatObject, setSelectedChatObject] = React.useState(null);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

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

    let withReply = {
      reply: replyMessage,
      message: chatMessage
    };

    let tempMessage = addMessage;
    // tempMessage.push(chatMessage);
    tempMessage.push(withReply);
    setAddMessage([...tempMessage]);
    setChatMessage("");

    setReplyMessage("");
    setReplyMessageName("");
  };

  const doReply = (item) => {
    setReplyMessage(item.message);
    setReplyMessageName(item.name);
  };

  const onCloseReply = () => {
    setReplyMessage("");
    setReplyMessageName("");
  };

  return(
    <React.Fragment>
      <div className="layer-content flex flex-col h-screen overflow-hidden">
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

        <main className="flex-1 overflow-y-scroll pl-[34px] pr-[34px] pt-[15px] pb-[15px]">
          {loading ? (
            <>
              <LoadingElem 
                text="Loading Chats..."
                removeLoading={removeLoading}
              />
            </>
          ) : (
            <>
              {detailChat ? (
                <>
                  <div>
                    {DummyChat.data.map((item) => {
                      return(
                        <React.Fragment
                          key={`${item.id}`}
                        >
                          <ChatItem 
                            item={item}
                            onClickReply={doReply}
                          />
                        </React.Fragment>
                      );
                    })}

                    {addMessage.length > 0 ? (
                      <>
                        {addMessage.map((item, index) => {
                          return (
                            <React.Fragment key={`${index}`}>
                              {item.reply !== "" ? (<>
                                <div className={"my-baloon flex justify-end mt-[15px] "+`${item.reply !== "" ? "" : "mb-[15px]"}`}>
                                  <div>
                                    {item.reply !== "" ? (<>
                                      <div
                                        className="flex justify-end"
                                        style={{
                                          color: "#9B51E0",
                                        }}
                                      >
                                        You
                                      </div>
                                    </>) : null}
                                    <div className="flex items-start">
                                      <div className="box-with-reply">
                                        <div
                                          style={{
                                            margin: "10px",
                                            color: "#4F4F4F",
                                            fontSize: "12px",
                                          }}
                                        >
                                          {item.reply}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>) : null}
                              <div className={"my-baloon flex justify-end mb-[15px] "+`${item.reply !== "" ? "mt-[7px]" : "mt-[15px]"}`}>
                                <div>
                                  {item.reply !== "" ? null : (<>
                                    <div
                                      className="flex justify-end"
                                      style={{
                                        color: "#9B51E0",
                                      }}
                                    >
                                      You
                                    </div>
                                  </>)}
                                  <div className="flex items-start">
                                    <div className="three-dot cursor-pointer">
                                      <ThreeDotsComp 
                                        type="me"
                                      />
                                    </div>
                                    <div className="box-chat-me">
                                      <div
                                        style={{
                                          margin: "10px",
                                          color: "#4F4F4F",
                                          fontSize: "12px",
                                        }}
                                      >
                                        {item.message}
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
                  {DummyHeaderChat.data.map((item) => {
                    return(
                      <React.Fragment
                        key={`${item.id}`}
                      >
                        <ChatHeaderItem 
                          item={item}
                          onClickChat={onClickChat}
                        />
                      </React.Fragment>
                    );
                  })}
                </>
              )}
            </>
          )}
        </main>

        {detailChat ? (
          <footer className="w-full text-center  p-4">
            <div className="grid grid-cols-6 gap-4">
              {replyMessage !== "" ? (<>
                <div 
                  className="duration-300 col-span-5 text-left container-title-reply-header"
                >
                  <div className='title-reply-header flex justify-between'>
                    <div className='ml-[16px] mt-[16px] font-bold'>
                      Replying to {replyMessageName}
                    </div>
                    <div className='mr-[8px] mt-[8px] cursor-pointer' onClick={() => onCloseReply()}>
                      <CloseSign height="14" />
                    </div>
                  </div>
                  <div className='ml-[16px] mt-[7px] mb-[12px]'>
                    {replyMessage}
                  </div>
                </div>
              </>) : null}
            </div>
            <div className="grid grid-cols-6 gap-4">
              <div className={"duration-300 cursor-pointer text-white chat-input-search col-span-5 "+`${replyMessage !== "" ? "" : "no-reply"}`}>
                <input
                  type="textarea"
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
        ) : null}
        
      </div>
    </React.Fragment>
  );
};

export default ScreenChat;