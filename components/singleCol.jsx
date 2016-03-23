import React from 'react';
import '../_styles/singleCol.scss';

var SingleCol = (props) => {
  return <div className="layout-single-col">
    {props.children}
  </div>
}

export default SingleCol
