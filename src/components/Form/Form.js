import React, { Component } from 'react';
import { Formstyles } from './materialStyles';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <FormControl className={classes.margin}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
            htmlFor="custom-css-input"
          >
            City
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline
            }}
            id="custom-css-input"
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
            htmlFor="custom-css-input"
          >
            Country
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline
            }}
            id="custom-css-input"
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(Formstyles)(Form);
