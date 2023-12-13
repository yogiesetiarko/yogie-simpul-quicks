import * as Sentry from "@sentry/react";


function App () {
  return (
    <div className='App'>
    </div>
  );
}

export default Sentry.withProfiler(App);
