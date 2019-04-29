import React from 'react';
import IndividualComponent from './indiviualComponent'

const TestComponent = props => {

  return (
    <div>
     {props.data.map(item =>
       <IndividualComponent data={item} key={item.username} />
     )}
    </div>
  )
}

export default TestComponent;
