import React, { Component } from 'react';
import { Formstyles } from './materialStyles';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <form onSubmit={this.props.getWeather}>
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
              name="city"
              autoComplete="off"
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
              name="country"
              autoComplete="off"
            />
          </FormControl>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(Formstyles)(Form);
