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
  Pencil
} from "../../assets";
import { 
  Checkbox,
  DatePicker,
  Input
} from 'antd';


const AccordionItem = ({data}) => {
  // const [isActive, setIsActive] = React.useState(false);
  const [isActive, setIsActive] = React.useState(data.active);
  const [dateChoosen, setDateChoosen] = React.useState(newDate);

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
                  color: "#4F4F4F"
                }}
              >
                {data.description !== "" ? (<>{data.description}</>) : (<>{"No Description"}</>)}
              </div>
            </div>
          </div>
        </div>
      </>) : null}
    </div>    
  );
};

export default AccordionItem;