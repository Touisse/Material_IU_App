import {  Grid } from "@material-ui/core";
import React from "react";
import Controls from "../../Components/Controls/Controls";
import {useForm , Form} from "../../Components/useForm";
import * as EmployeeService from '../../services/EmployeeService'

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
  };
  const genderItems = [
    {
      id:'male',
      title:'Male'
    },
    {
      id:'female',
      title:'Female'
    }
    ,  {
      id:'other',
      title:'Other'
    }
  ]

const EmployeeForm = () => {
  const validate =(fieldValues= values)=>{
    let temp = {...errors}
    if('fullName' in fieldValues)
    temp.fullName=fieldValues.fullName?"":"This field is required"
    if('email' in fieldValues)
    temp.email=(/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is not Valid"
    if('mobile' in fieldValues)
    temp.mobile=fieldValues.mobile.length>9?"":"Min 10 Numbers is required"
    if('departmentId' in fieldValues)
    temp.departmentId=fieldValues.departmentId.length != 0?"":"This field is required"
    setErrors({
      ...temp
    })
    if(fieldValues == values)
    return Object.values(temp).every(x => x == "")
  }

  const {values,setValues,errors,setErrors,handleInputChange,resetForm} = useForm(initialValues ,true , validate);
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(validate()){
    EmployeeService.insertEmployee(values)
    resetForm()
    }
  }
  return (
    <div>
        <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input name="fullName" label="Full Name" value={values.fullName} onChange={handleInputChange}  error={errors.fullName} />
            <Controls.Input
              label="E-mail"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Controls.Input
              label="Mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleInputChange}
              error={errors.mobile}
            />
            <Controls.Input
              label="City"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
             name="gender"
             label = "Gender"
             value={values.gender}
             onChange={handleInputChange}
             items={genderItems}/>
             <Controls.Select
             name="departmentId"
             label="Department"
             value={values.departmentId}
             onChange={handleInputChange}
             options={EmployeeService.getDepartmentCollection()}
             error={errors.departmentId}
              />
              <Controls.DatePicker name = "hireDate" label ="Hire Date" value={values.hireDate} onChange={handleInputChange}/>
              <Controls.CheckBox name = "isPermanent" label ="Permanent Employee" value={values.isPermanent} onChange={handleInputChange} />
              <div>
                <Controls.Button type="submit" text="Submit" />
                <Controls.Button color="default" text="Reset" onClick={resetForm} />
              </div>
              </Grid>
        </Grid>
        </Form>
    </div>
  );
};

export default EmployeeForm;
