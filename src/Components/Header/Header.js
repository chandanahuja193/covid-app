import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


function ElevationScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  
  appBar : {
    ...theme.typography.appBar,
    padding : '1em 0',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom : '3em'
  },
  select : {
    color : 'lightBlue'
  }
}))


const Header = ({value , setValue}) => {
  
  const classes = useStyles()

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar  className={classes.appBar} >
          <Toolbar>
          <Typography variant="h1">Covid-19 Stats</Typography>
            <FormControl>
            <Select
            disableUnderline
            labelId="covid-view"
            value={value}
            classes={{ select : classes.select , icon : classes.select }}
            onChange={ (e) => {  setValue(e.target.value) }  }
             >
            <MenuItem value="barChart">BarChart</MenuItem>
            <MenuItem value="table">Table</MenuItem>
          </Select>
          </FormControl>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;