import React from 'react';
import { 
  Select, 
  Button,
} from 'antd';
import LoadingElem from './LoadingElem';

import AccordionItem from './AccordionItem';

const items = [
  {
    key: '1',
    check: false,
    label: 'Close off Case #012920- RODRIGUES, Amiguel',
    daysLeft: 2,
    date: '12/06/2021',
    dateSelect: "12/06/2021",
    description: "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
    status: 'not done',
    active: true,
    new: false,
    tags: ["Important ASAP", "Offline Meeting", "Virtual Meeting", "ASAP", "Client Related", "Self Task", "Appointments", "Court Related"]
  },
  {
    key: '2',
    check: false,
    label: 'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203',
    daysLeft: 4,
    date: '14/06/2021',
    dateSelect: "14/06/2021",
    description: "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
    status: 'not done',
    active: false,
    new: false,
    tags: ["Self Task"]
  },
  {
    key: '3',
    check: false,
    label: 'Set up appointment with Dr Blake',
    daysLeft: 2,
    date: '22/06/2021',
    dateSelect: "22/06/2021",
    description: "",
    status: 'not done',
    active: false,
    new: false,
    tags: ["Virtual Meeting", "ASAP"]
  },
  {
    key: '4',
    check: false,
    label: 'Contact Mr Caleb - video conference?',
    daysLeft: 0,
    date: '10/06/2021',
    dateSelect: "10/06/2021",
    description: "",
    status: 'done',
    active: false,
    new: false,
    tags: ["Important ASAP", "Offline Meeting"]
  },
  {
    key: '5',
    check: false,
    label: 'Assign 3 homework to Client A',
    daysLeft: 0,
    date: '10/06/2021',
    dateSelect: "10/06/2021",
    description: "",
    status: 'done',
    active: false,
    new: false,
    tags: ["Important ASAP", "Court Related"]
  },
];

const ScreenTask = () => {

  const [loading, setLoading] = React.useState(true);
  const [taskItems, setTaskItems] = React.useState(items);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const removeLoading = () => {
    setLoading(false);
  };

  const clickNewTask = () => {
    const newItems = {
      key: '999',
      check: false,
      label: 'A Close off Case #012920- RODRIGUES, Amiguel',
      daysLeft: 2,
      date: '',
      dateSelect: "12/06/2021",
      description: "",
      status: 'not done',
      active: true,
      new: true,
      tags: []
    };  
    let tempItems = taskItems;
    tempItems.push(newItems);
    setTaskItems([...tempItems]);
  };

  const handleChangeSelect = () => {
    setLoading(true);
  };

  return(
    <React.Fragment>
      <div className="layer-content flex flex-col h-screen overflow-hidden">

        <header className="w-full text-center border-b border-grey pl-[29px] pr-[39px] pt-[20px] pb-[20px]">
          <div className="flex justify-between">
            <Select
              defaultValue="My Tasks"
              style={{
                width: 200,
              }}
              onChange={handleChangeSelect}
              options={[
                {
                  value: 'personal-errands',
                  label: 'Personal Errands',
                },
                {
                  value: 'urgent-to-do',
                  label: 'Urgent Tp-Do',
                },
              ]}
            />
            <Button
              onClick={() => clickNewTask()}
              style={{
                backgroundColor: "#2F80ED",
                color: "#FFFFFF"
              }}
            >
              New Task
            </Button>
          </div>
        </header>

        <main className="flex-1 overflow-y-scroll pl-[34px] pr-[34px] pt-[15px] pb-[15px]">
          {loading ? (
            <>
              <LoadingElem 
                text={"Loading Tasks..."}
                removeLoading={removeLoading}
              />
            </>
          ) : (
            <>
              {taskItems.map((item, index) => {
                return(
                  <React.Fragment
                    key={`${index}`}
                  >
                    <AccordionItem 
                      data={item}
                    />
                  </React.Fragment>
                );
              })}
            </>
          )}
        </main>
        
      </div>
    </React.Fragment>
  );
};

export default ScreenTask;