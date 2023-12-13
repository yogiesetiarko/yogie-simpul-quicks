import React from 'react';
import {
  ArrowDownSign,
} from "../../assets";
import ThreeDotsComp from './ThreeDotsComp';

const ChatItem = ({
  item,
  onClickReply,
}) => {

  const doReply = (item) => {
    // console.log("doReply, item", item);
    onClickReply(item);
  };

  if(item.type === "me") {
    return(
      <React.Fragment
        key={`${item.id}`}
      >
        <div className="my-baloon flex justify-end mt-[15px] mb-[15px]">
          <div>
            <div
              className="flex justify-end"
              style={{
                color: "#9B51E0",
              }}
            >
              {item.name}
            </div>
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
  } else if(item.type === "todayone") {
    return(
      <React.Fragment
        key={`${item.id}`}
      >
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
            {item.message}
          </div>
          <div
            className=""
            style={{
              height: "1px",
              background: "#4F4F4F",
            }}
          ></div>
        </div>
      </React.Fragment>
    );
  } else if(item.type === "newmessageone") {
    return(
      <React.Fragment
        key={`${item.id}`}
      >
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
            {item.message}
          </div>
          <div
            className=""
            style={{
              height: "1px",
              background: "#EB5757",
            }}
          ></div>
        </div>
      </React.Fragment>
    );                        
  } else if(item.type === "kollis") {
    return(
      <React.Fragment
        key={`${item.id}`}
      >
        <div className="their-baloon flex justify-start mt-[15px] mb-[15px]">
          <div>
            <div
              className="flex"
              style={{
                color: "#E5A443",
              }}
            >
              {item.name}
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
                  {item.message}
                </div>
              </div>
              <div className="three-dot cursor-pointer">
                <ThreeDotsComp 
                  type="their"
                  onReply={doReply}
                  message={item.message}
                  name={item.name}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );                        
  } else if(item.type === "aNd1") {
    return(
      <React.Fragment
        key={`${item.id}`}
      >
        <div className="their-baloon flex justify-start mt-[15px] mb-[15px]">
          <div>
            <div
              className="flex"
              style={{
                color: "#43B78D",
              }}
            >
              {item.name}
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
                  {item.message}
                </div>
              </div>
              <div className="three-dot cursor-pointer">
                <ThreeDotsComp 
                  type="their"
                  onReply={doReply}
                  message={item.message}
                  name={item.name}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );                        
  } else if(item.type === "newmessagelive") {
    return(
      <React.Fragment
        key={`${item.id}`}
      >
        <div
          className="new-messages-mark mt-[15px] mb-[15px]"
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              background: "#E9F3FF",
              color: "#2F80ED",
              display: "inline-block",
              // padding: "0 20px",
            }}
            className='py-[10px] px-[20px] rounded-[5px]'
          >
            <div className='flex justify-center items-center'>
              <div>
                {item.message}
              </div>
              <div className="flex justify-center items-center ml-[7px]">
                <ArrowDownSign />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );                        
  } else if(item.type === "botwaiting") {
    return(
      <React.Fragment
        key={`${item.id}`}
      >
        <div
          className="loading-connect-chat mt-[15px] mb-[15px]"
          style={{
            textAlign: "left",
          }}
        >
          <div
            style={{
              background: "#E9F3FF",
              color: "#2F80ED",
              display: "inline-block",
              // padding: "0 20px",
            }}
            className='py-[10px] px-[20px] rounded-[5px] w-full'
          >
            <div className='flex justify-start items-center'>
              <div className="flex justify-center items-center ml-[7px]">
                <div
                  className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                  style={{
                    color: "#2F80ED",
                  }}
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
              <div className='ml-[10px]' style={{color: "#4F4F4F", fontSize: "12px"}}>
                Please wait while we connect you with one of our team ...
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );                        
  }
};

export default ChatItem;