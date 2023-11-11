import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenModal({
  isOpen,
  onHide,
  isSaveDisabled,
  children,
}) {
  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    console.log(open, isOpen, isSaveDisabled);
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onHide();
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Appoinment
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              disabled={isSaveDisabled}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>

        {children}
      </Dialog>
    </React.Fragment>
  );
}
