import React from 'react';

const LoadingElem = ({
  text,
  removeLoading
}) => {

  const clickRemoveLoading = () => {
    removeLoading();
  };

  return(
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
        <div onClick={() => clickRemoveLoading()}>{text}</div>
      </div>
    </div>    
  );
};

export default LoadingElem;