import React from 'react';
import {
  IconUser,
} from "../../assets";

const ChatHeaderItem = ({item, onClickChat}) => {
  return(
    <div
      onClick={() =>
        onClickChat({ title: item.title })
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
                  {item.title}
                </div>
                <div
                  style={{
                    color: "#4F4F4F",
                    fontSize: "12px",
                    marginLeft: "16px",
                  }}
                >
                  {item.date}
                </div>
              </div>
              {item.from !== "" ? (<>
                <div
                  style={{
                    color: "#4F4F4F",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  {item.from} :
                </div>
              </>) : null}
              <div
                style={{
                  color: "#4F4F4F",
                  fontSize: "14px",
                }}
              >
                {item.headerMessage}
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
  );
};

export default ChatHeaderItem;