import React, { useRef } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { DFlexColumn, DFlex } from '../../../../styles/styled/flex.styled'
import { useNavigate } from 'react-router-dom'
import { postRequest } from '../../../services/main.service'
import axios from 'axios'

export default function SignupPage() {
    const source = axios.CancelToken.source()
  const navigate = useNavigate()
  const formRef = useRef<any>({})

    const handleSignIn = () => {
        navigate('/signin')
    }

    const onRegister = () => {
    const listKey = ["email", "first_name", "last_name", "password"];
    let objParams: any = {}

    listKey?.map((obj: any) => {
      objParams[obj] = formRef.current[obj]?.value
    })
    serviceRegister(objParams)
    console.log(objParams)
    }

    const serviceRegister = async(params: any) => {
       await new Promise((resolve) => setTimeout(resolve, 300))
       try{
        const req = await postRequest({ path: `https://take-home-test-api.nutech-integrasi.com/registration`, params, sourceToken: source.token })
        console.log(req);
       } catch(e){

       }
    }

  return (
    <Row className='g-0'>
            <Col md={6}>
                <Row className='vh-100 d-flex justify-content-center align-items-center'>
                    <Col md={5}>
                        <DFlexColumn className='w-100'>
                            <DFlex className='gap-3 align-items-center justify-content-center w-100'>
                                <div><img src="\static\logo.png" alt="" /></div>
                                <div className='fw-500'>SIMS PPOB</div>
                            </DFlex>
                            <div className='fs-20 lh-sm text-center w-100 fw-500 my-3'>Masuk atau buat akun untuk memulai</div>
                            <DFlexColumn className='w-100'>
                                <Form.Control type="email" className='fs-12' placeholder="Masukan email anda" 
                                ref={(el: any) => (formRef.current[`email`] = el)} />
                                <Form.Control type="text" className='fs-12' placeholder="Nama depan" 
                                ref={(el: any) => (formRef.current[`first_name`] = el)} />
                                <Form.Control type="text" className='fs-12' placeholder="Nama Belakang" 
                                ref={(el: any) => (formRef.current[`last_name`] = el)} />
                                <Form.Control type="password" className='fs-12' placeholder="Buat password anda" 
                                ref={(el: any) => (formRef.current[`password`] = el)} />
                                <Form.Control type="password" className='fs-12' placeholder="Konfirmasi password anda" 
                                ref={(el: any) => (formRef.current[`password_konfirmasi`] = el)} />
                            </DFlexColumn>
                           
                           <Button variant='danger' className='w-100' onClick={onRegister}>Register</Button>
                           <div className='mt-4 text-center fs-12 w-100'>
                              Sudah punya akun? Login <span className='fw-500 text-danger cursor-pointer' onClick={handleSignIn}>di sini</span>
                           </div>
                        </DFlexColumn>
                    </Col>
                </Row>
            </Col>
            <Col md={6}>
            <div style={{height:"100vh"}}><img className='w-100 h-100' src="\static\IllustrasiLogin.png" alt="" /></div>
            </Col>
        </Row>
  )
}
