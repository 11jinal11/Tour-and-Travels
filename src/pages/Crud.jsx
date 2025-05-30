
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
const Crud = () => {
const[list,setList]=useState([])
   const[ini,setIni]=useState({
    name: "",
    surname: "",
    image: "",
  
   }) 
     const token = "cQMPk3q9M9kPtjUR"
     useEffect(() => {
        showData();
      }, []);
     const handleSubmit=(values)=>{

        // values.image=''
        const formData = new FormData()
        // formData.append('name',values.name)
        // formData.append('surname', values.surname)
        // formData.append('image', values.image)

        Object.keys(values).forEach((key)=>{
            formData.append(key,values[key])
        })
        axios
        .post("https://generateapi.onrender.com/api/demo", formData, {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("success");
          showData();
        })
        .catch((error) => {
          console.log(error);
        });
     }

     const showData = () => {
        axios
          .get("https://generateapi.onrender.com/api/demo", {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            setList(res.data.Data);
            // console.log(res.data.Data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div>
      <Formik
      enableReinitialize
      initialValues={ini}
      onSubmit={handleSubmit}
      >
      {({ setFieldValue }) => (
        <Form>
            <Field type="text" name='name'></Field>
            <Field type="text" name='surname'></Field>
           <input type="file" name='image' id=""
                  onChange={(e) => {
                    setFieldValue('image', e.target.files[0]);
                  }}
                  />
            <button type='submit'>Submit</button>
        </Form>
        )}
      </Formik>

      <table border={3}> 
        <tr>
        <td>Id</td>
          <td>Name</td>
          <td>Surname</td>
          <td>Image</td>
          <td>Update</td>
        </tr>
        {list.map((item,index)=>(
            <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>
                    <img src={item.image} alt="" width="100px" height="100px"/>
                </td>
            </tr>
        ))}
      </table>
    </div>
  )
}

export default Crud
