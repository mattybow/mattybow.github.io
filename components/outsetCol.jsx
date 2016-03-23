import React from 'react';
import '../_styles/outsetCol.scss';

var OutsetCol = (props) => {
  return <div className="layout-outset-col" style={{
      marginLeft:'auto',
    }}>
    <div className="outset-left">
      <div className="container">
        {props.children}
      </div>
    </div>
    <div className="outset-right" style={{
        marginBottom:25,
        position:'relative'
      }}>
      <div className="container" >
        <div style={{
            position:'absolute',
            top:0,bottom:0,right:0,left:0,
            backgroundSize:'cover',
            backgroundPosition:"50% 50%",
            backgroundImage:`url("${props.imgSrc}")`,
          }}>
        </div>
      </div>
    </div>
  </div>
}

export default OutsetCol
