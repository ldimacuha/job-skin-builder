import React from 'react';

const Code = props => {
  return (
    <div className="p-3 bg-dark text-white rounded">
      <code className="text-white small">
        {props.code}
      </code>
    </div>
  )
}

export default Code;