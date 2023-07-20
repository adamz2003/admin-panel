import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ConfirmModal({ open, handleOpen, onConfirm }: any) {
  //   const [open, setOpen] = useState(false);

  //   const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} size='xs'>
        <DialogHeader>WARNING</DialogHeader>
        <DialogBody divider>Are you sure you want to delete it?</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"            
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={onConfirm}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
