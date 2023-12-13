import React from 'react';
import { Dropdown, Space } from 'antd';
import {
  ThreeDots,
} from "../../assets";

let taskType = [
  {
    label: "Delete",
    value: "delete",
    color: "#EB5757"
  }
];

let meType = [
  {
    label: "Edit",
    value: "edit",
    color: "#2F80ED"
  },
  {
    label: "Delete",
    value: "delete",
    color: "#EB5757"
  }
];  

let theirType = [
  {
    label: "Share",
    value: "share",
    color: "#2F80ED"
  },
  {
    label: "Reply",
    value: "reply",
    color: "#2F80ED"
  }
]; 

const ThreeDotsComp = ({
  type,
  onReply,
  message,
}) => {
  let valueList;
  // let aaa = onReply();

  if(type === "me") {
    valueList = meType;
  } else if(type === "their") {
    valueList = theirType;
  } else if(type === "task") {
    valueList = taskType;
  }

  const reply = (value) => {
    onReply(value);
    // console.log("reply value", value);
  };

  return(
    <Dropdown
      className="yogie"
      trigger={['click']}
      dropdownRender={() => (<>
        <div>
          <div className="">
            <ul className="yogie ant-dropdown-menu">
              {valueList.map((item) => {
                return(
                  <React.Fragment
                    key={item.value}
                  >
                    <li className=" ant-dropdown-menu-item-only-child cursor-pointer" onClick={() => reply(message)}>
                      <span 
                        className="ant-dropdown-menu-title-content"
                        style={{
                          color: item.color
                        }}
                      >
                        {item.label}
                      </span>
                    </li>
                    <li role="separator" className="ant-dropdown-menu-item-divider"></li>                    
                  </React.Fragment>
                );
              })}

            </ul>
          </div>
        </div>
      </>)}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <ThreeDots
            style={{
              color: "black",
              width: "20px",
              height: "20px"
            }}
          />
        </Space>
      </a>
    </Dropdown>      
  );
};

export default ThreeDotsComp;