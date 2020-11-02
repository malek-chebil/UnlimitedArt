import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  


class SelectState extends React.Component {
    constructor(props){
        super(props)
        this.state={
            open:false,
            state:""
        }
this.handleChange=this.handleChange.bind(this)
    }
    handleChange (e){
 const state = e.target.value;
 this.props.state(state)
 this.setState({state})
    }
render() {
    
    return (
<div>
<FormControl style={{minWidth:"120"}}>
        <InputLabel htmlFor="age-native-simple">State</InputLabel>
        <Select
          native
          onChange={this.handleChange}
          inputProps={{
            name: 'State',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
        </div>
        
    
      );
  }
}
// const classes = useStyles();
export default  SelectState