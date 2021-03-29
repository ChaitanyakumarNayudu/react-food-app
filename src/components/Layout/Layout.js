import React from "react";

import classes from './Layout.module.css';

// import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
  <>
    <div>Toolbar, side Drawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </>
);

export default layout;
