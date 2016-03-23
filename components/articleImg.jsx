import React from 'react';
import cx from 'classnames';
import '../_styles/singleCol.scss'

var ArticleImg = (props) => {
  const classes = cx("flex-parent-column", {"layout-single-col": props.contain} );

  return <div className={classes}
              style={{
                marginBottom:'1em'
              }}>
    <div className="container" style={{width:'ontouchstart' in window && props.screenShot ? 'calc(100% - 4em)' : props.width || '100%' }}>
      <img className={props.screenShot ? "shadow" : ''} src={props.src} style={{ width:'100%' }} alt=""/>
    </div>
  </div>
}

export default ArticleImg
