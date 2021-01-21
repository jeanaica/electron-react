import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Index = () => {
  return (
    <div>
      Hello React!
      <img src="images/Hisoka.jpg" alt="" />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('app'));
