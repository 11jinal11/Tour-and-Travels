import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BookFreeConsultForm from "../componants/BookFreeConsultForm ";

const BookFreeConsult = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Book a Free Consultation
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <BookFreeConsultForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default BookFreeConsult;
