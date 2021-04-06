import React from 'react';

import classes from './ToggleDrawer.module.css';

const ToggleDrawer = (props) => (
   <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
   </div>
);

export default ToggleDrawer;