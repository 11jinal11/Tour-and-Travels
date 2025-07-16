import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const BookFreeConsultForm = ({ handleClose }) => {

  const token = 'qMOWm3sCXpZ3W8zM';
// const handleSubmit = async (values, { resetForm }) => {
//   console.log(values);
  
//   try {
//    await axios.post('https://generateapi.onrender.com/api/freeconsult',values,{
//      headers: { Authorization: token },
//     },
  
// );
//     alert("Thank you! Your request has been submitted.");
//     resetForm();
//     handleClose();
//   } catch (error) {
//     console.error("Error submitting:", error);
//     if (error.response) {
//       console.log("Server responded with:", error.response.data);
//       console.log("Status code:", error.response.status);
//     }
 
//   }
// };

const handleSubmit = async (values, { resetForm }) => {
  values.contactno = Number(values.contactno)
  console.log(values);

  
  try {
    await axios.post(
      "https://generateapi.onrender.com/api/freeconsult",
      values,
      {
        headers: {
          Authorization: token, 
        },
      }
    );
    alert("Thank you! Your request has been submitted.");
    resetForm();
    handleClose();
  } catch (error) {
    console.error("Error submitting:", error);
    if (error.response) {
      console.log("Server responded with:", error.response.data);
      console.log("Status code:", error.response.status);
    }
  }
};

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        contactno: "",
        message: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2}>
            <Field
              as={TextField}
              name="name"
              label="Name"
              required
              fullWidth
            />
            <Field
              as={TextField}
              name="email"
              label="Email"
              type="email"
              required
              fullWidth
            />
            <Field
              as={TextField}
              name="contactno"
              label="Phone"
              required
              fullWidth
            />
            <Field
              as={TextField}
              name="message"
              label="Message"
              multiline
              rows={4}
              required
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: "#D4A762", color: "#121212" }}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default BookFreeConsultForm;
