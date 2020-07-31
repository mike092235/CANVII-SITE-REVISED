import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  React.useEffect(() => {
    return function cleanup() {};
  });
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Acknowledging the <strong>Artist.</strong></h2>
          <h2>Appreciating the <strong>Art.</strong></h2>
          <h2>Welcome to <strong>CANVII</strong></h2>
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
