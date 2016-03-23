import React from 'react';

var OutsetCol = (props) => {
  return <div style={{
      width:"calc(100% - (100% - 500px)/2)",
      marginLeft:'auto',
      display:'flex',
      flexFlow:'row nowrap'
    }}>
    <div style={{flex:"1"}}>
      {props.children}
    </div>
    <div style={{
        marginBottom:25,
        marginLeft:'1em',
        flex:"2",
        position:'relative'
      }}>
      <div style={{
          position:'absolute',
          top:0,bottom:25,right:0,left:0,
          backgroundSize:'cover',
          backgroundPosition:"50% 50%",
          backgroundImage:`url("${props.imgSrc}")`,
        }}>
      </div>
    </div>
  </div>
}

export default OutsetCol
