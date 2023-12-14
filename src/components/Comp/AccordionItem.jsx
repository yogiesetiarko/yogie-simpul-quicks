import React from "react";
import ThreeDotsComp from "./ThreeDotsComp";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const dateFormat = 'DD/MM/YYYY';
var d = new Date();
let newDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
let newFormatDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
let nowDayJs = dayjs(newFormatDate, dateFormat);

import {
  ArrowUpExpand,
  ArrowDownExpand,
  Clock,
  Pencil,
  Bookmark
} from "../../assets";
import { 
  Checkbox,
  DatePicker,
  Input,
  Dropdown,
  Space
} from 'antd';

const items = [
  {
    label: <div className="pl-[14px] pr-[14px] pt-[9px] pb-[9px]" style={{backgroundColor: "#E5F1FF", borderRadius: "5px", fontSize: "12px"}}>Important ASAP</div>,
    key: '0',
    value: "Important ASAP",
    slug: "important-asap"
  },
  {
    label: <div className="pl-[14px] pr-[14px] pt-[9px] pb-[9px]" style={{backgroundColor: "#FDCFA4", borderRadius: "5px", fontSize: "12px"}}>Offline Meeting</div>,
    key: '1',
    value: "Offline Meeting",
    slug: "offline-meeting"
  },
  {
    label: <div className="pl-[14px] pr-[14px] pt-[9px] pb-[9px]" style={{backgroundColor: "#F9E9C3", borderRadius: "5px", fontSize: "12px"}}>Virtual Meeting</div>,
    key: '2',
    value: "Virtual Meeting",
    slug: "virtual-meeting"    
  },
  {
    label: <div className="pl-[14px] pr-[14px] pt-[9px] pb-[9px]" style={{backgroundColor: "#AFEBDB", borderRadius: "5px", fontSize: "12px"}}>ASAP</div>,
    key: '3',
    value: "ASAP",
    slug: "asap"    
  },
  {
    label: <div className="pl-[14px] pr-[14px] pt-[9px] pb-[9px]" style={{backgroundColor: "#CBF1C2", borderRadius: "5px", fontSize: "12px"}}>Client Related</div>,
    key: '4',
    value: "Client Related",
    slug: "client-related"    
  },
  {
    label: <div className="pl-[14px] pr-[14px] pt-[9px] pb-[9px]" style={{backgroundColor: "#CFCEF9", borderRadius: "5px", fontSize: "12px"}}>Self Task</div>,
    key: '5',
    value: "Self Task",
    slug: "self-task"    
  },
  {
    label: <div className="pl-[14px] pr-[14px] pt-[9px] pb-[9px]" style={{backgroundColor: "#F9E0FD", borderRadius: "5px", fontSize: "12px"}}>Appointments</div>,
    key: '6',
    value: "Appointments",
    slug: "appointments"    
  },
  {
    label: <div className="pl-[14px] pr-[14px] pt-[9px] pb-[9px]" style={{backgroundColor: "#9DD0ED", borderRadius: "5px", fontSize: "12px"}}>Court Related</div>,
    key: '7',
    value: "Court Related",
    slug: "court-related"
  },
];

const BookColor = ({item}) => {
  
  let color;
  if(item === "Offline Meeting") {
    color = "#FDCFA4";
  } else if(item === "Virtual Meeting") {
    color = "#F9E9C3";
  } else if(item === "ASAP") {
    color = "#AFEBDB";
  } else if(item === "Client Related") {
    color = "#CBF1C2";
  } else if(item === "Self Task") {
    color = "#CFCEF9";
  } else if(item === "Appointments") {
    color = "#F9E0FD";
  } else if(item === "Court Related") {
    color = "#9DD0ED";
  } else if(item === "Important ASAP") {
    color = "#E5F1FF";
  }

  return(
    <div
      className="ml-[8px] px-[12px] py-[8px]"
      style={{
        color: "#4F4F4F",
        fontSize: "12px",
        backgroundColor: color,
        borderRadius: "5px"
      }}
    >
      {item}
    </div>
  );
};

const AccordionItem = ({data}) => {
  // const [openTags, setOpenTags] = React.useState(false);
  const [isActive, setIsActive] = React.useState(data.active);
  const [dateChoosen, setDateChoosen] = React.useState(newDate);
  const [tags, setTags] = React.useState(data.tags);

  const onChangeDate = (date, dateString) => {
    setDateChoosen(dateString);
  };

  const onClickArrow = () => {
    setIsActive((prev) => !prev);
  };

  let status;
  if(data.status === "done") {
    status = "line-through";
  } else {
    status = "";
  }

  function removeArray(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
      what = a[--L];
      while ((ax= arr.indexOf(what)) !== -1) {
        arr.splice(ax, 1);
      }
    }
    return arr;
  }

  const selectTags = (item) => {
    let tempTags = tags;

    if(tempTags.includes(item)) {
      let newArr = removeArray(tempTags, item);
      setTags([...newArr]);
    } else {
      tempTags.push(item);
      setTags([...tempTags]);
    }
  };

  return(
    <div 
      className='item-task pb-[19px] pt-[19px]'
      style={{
        borderBottom: "1px solid #828282"
      }}
    >
      <div className='header-task flex flex-row justify-between items-baseline'>
        <div className="basis-1/12">
          <Checkbox />
        </div>
        {data.new ? (<>
          <div 
            className={"basis-7/12 cursor-pointer "}
            style={{
              fontSize: "14px",
              color: "#4F4F4F"
            }}
          >
            <Input placeholder="Type Task Title" />
          </div>
        </>) : (<>
          <div 
            onClick={() => onClickArrow()}
            className={"basis-7/12 cursor-pointer "+status}
            style={{
              fontSize: "14px",
              color: "#4F4F4F"
            }}
          >
            {data.label}
          </div>
        </>)}
        <div className='basis-4/12 flex justify-end'>
          <div
            onClick={() => onClickArrow()}
            className="day-left mr-[19px] cursor-pointer"
            style={{
              fontSize: "12px",
              color: "#EB5757"
            }}
          >
            {data.daysLeft} Days Left
          </div>
          <div 
            onClick={() => onClickArrow()}
            className="date mr-[10px] cursor-pointer"
            style={{
              fontSize: "12px"
            }}
          >
            {data.new ? (<>
              {dateChoosen}
            </>) : (<>
              {data.date}
            </>)}
          </div>
          <div 
            className="mr-[8px] flex items-center cursor-pointer"
            onClick={() => onClickArrow()}
          >
            {isActive ? (<>
              <ArrowUpExpand />
            </>) : (<>
              <ArrowDownExpand />
            </>)}
          </div>
          <div className="cursor-pointer">
            <ThreeDotsComp 
              style={{}}
              type="task"        
            />
          </div>
        </div>
      </div>
      {isActive ? (<>
        <div className='content-task flex flex-row '>
          <div className="basis-1/12"></div>
          <div className="basis-11/12">
            <div className="flex items-center mt-[12px]">
              <Clock 
                fill={data.new === true ? "#4F4F4F" : "#2F80ED"}
              />
              <div className="ml-[8px]">
                <DatePicker defaultValue={dayjs(nowDayJs, dateFormat)} format={dateFormat} onChange={onChangeDate} />
              </div>
            </div>
            <div className="flex mt-[16px]">
              <div>
                <Pencil 
                  fill={data.new === true ? "#4F4F4F" : "#2F80ED"}
                />
              </div>
              <div
                className="ml-[8px]"
                style={{
                  color: "#4F4F4F",
                  fontSize: "12px"
                }}
              >
                {data.description !== "" ? (<>{data.description}</>) : (<>{"No Description"}</>)}
              </div>
            </div>
            {tags.length > 0 ? (<>
              <div className="flex mt-[16px]">
                <div>
                  <Bookmark 
                    fill={data.new === true ? "#4F4F4F" : "#2F80ED"}
                  />
                </div>

                {data.new === true ? (<>
                  <div
                    className="ml-[8px] flex items-center"
                    style={{
                      color: "#4F4F4F",
                      fontSize: "12px"
                    }}
                  >
                    {tags.map((item, index) => {
                      return(
                        <React.Fragment
                          key={`${index}`}
                        >
                          <BookColor 
                            item={item}
                          />
                        </React.Fragment>
                      );
                    })}                    
                    <Dropdown
                      className="yogie-tags ml-[8px]"
                      menu={{
                        items,
                        selectable: true,
                      }}
                      trigger={['click']}
                      dropdownRender={() => (<>
                        <div>
                          <div className="">
                            <ul className="yogie-tags ant-dropdown-menu">
                              {items.map((item, index) => {
                                return(
                                  <React.Fragment
                                    key={index}
                                  >
                                    <li className=" ant-dropdown-menu-item-only-child cursor-pointer" onClick={() => selectTags(item.value)}>
                                      <span 
                                        className="ant-dropdown-menu-title-content"
                                        style={{
                                          color: item.color
                                        }}
                                      >
                                        {item.label}
                                      </span>
                                    </li>
                                  </React.Fragment>
                                );
                              })}
                
                            </ul>
                          </div>
                        </div>
                      </>)}                    
                    >
                      <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
                        <Space
                          style={{
                            color: "#4F4F4F",
                            fontSize: "12px"
                          }}
                        >
                          Choose Tags
                        </Space>
                      </a>
                    </Dropdown>
                  </div>                
                </>) : (<>
                  {tags.map((item, index) => {
                    return(
                      <React.Fragment
                        key={`${index}`}
                      >
                        <BookColor 
                          item={item}
                        />
                      </React.Fragment>
                    );
                  })}
                </>)}

              </div>
            </>) : (<>
              <div className="flex mt-[16px]">
                <div>
                  <Bookmark 
                    fill={data.new === true ? "#4F4F4F" : "#2F80ED"}
                  />
                </div>
                {data.new === true ? (<>
                  <div
                    className="ml-[8px]"
                    style={{
                      color: "#4F4F4F",
                      fontSize: "12px"
                    }}
                  >
                    <Dropdown
                      className="yogie-tags"
                      menu={{
                        items,
                        selectable: true,
                      }}
                      trigger={['click']}
                      dropdownRender={() => (<>
                        <div>
                          <div className="">
                            <ul className="yogie-tags ant-dropdown-menu">
                              {items.map((item, index) => {
                                return(
                                  <React.Fragment
                                    key={index}
                                  >
                                    <li className=" ant-dropdown-menu-item-only-child cursor-pointer" onClick={() => selectTags(item.value)}>
                                      <span 
                                        className="ant-dropdown-menu-title-content"
                                        style={{
                                          color: item.color
                                        }}
                                      >
                                        {item.label}
                                      </span>
                                    </li>
                                  </React.Fragment>
                                );
                              })}
                
                            </ul>
                          </div>
                        </div>
                      </>)}                    
                    >
                      <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
                        <Space
                          style={{
                            color: "#4F4F4F",
                            fontSize: "12px"
                          }}
                        >
                          Choose Tags
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                </>) : null}
              </div>            
            </>)}
          </div>
        </div>
      </>) : null}
    </div>    
  );
};

export default AccordionItem;