import React from 'react'

var ArticleImg = (props) => {
  return <div className="flex-parent-column"
              style={{
                marginBottom:'1em'
              }}>
    <img src={props.src} alt=""/>
  </div>
}

export default ArticleImg
