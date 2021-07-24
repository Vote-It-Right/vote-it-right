import { Button, Theme, withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export const SubmitButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);
