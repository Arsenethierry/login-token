import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';


export function LoginForm() {
    
  const [formData,setFormData] = useState({ email:"", password:"" })


  const handleSubmit = (e)=>{
    e.preventDefault();

    try {
      fetch('http://localhost:5000/api/login',{
      method:"POST",
      body: JSON.stringify(formData)
      }).then((response)=>{
      response.json().then((result)=>{
        console.log({"token": result.token});

        localStorage.setItem('login',JSON.stringify({
          token: result.token
        }))
      })
    })
    } catch (error) {
      console.log({ "error": error })
    }

  }
    return (
        <div className=''>
            <div className=''>
        <h2 className='fw-bold text-center' >Welcome Back</h2>
        <p className=' text-center'>subtitles goes here</p></div>
        <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Col >
            <Input type="email" name="email" value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})} id="Email" placeholder="Email*" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col >
            <Input type="password" name="password" value={formData.password} onChange={(e)=> setFormData({...formData, password: e.target.value})} id="examplePassword" placeholder="password*" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col >
          <Button color="dark" size="lg" block>Submit</Button>
          </Col>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
          <Label className=' d-flex flex-row-reverse '>forgot your password?</Label>
        </FormGroup>
      </Form>
      </div>
    )
}
