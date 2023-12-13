import React from 'react';

import { 
  Select, 
  Button,
} from 'antd';

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
    new: false
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
    new: false
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
    new: false
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
    new: false
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
    new: false
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
      new: true
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
                  <div onClick={() => removeLoading()}>Loading Tasks...</div>
                </div>
              </div>
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