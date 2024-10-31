import React, { useRef } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { DFlex, DFlexColumn } from '../../../styles/styled/flex.styled'
import { useNavigate } from 'react-router-dom';
import { postRequest } from '../../services/main.service';

export default function SigninPage() {
    const navigate = useNavigate();
    const formRef = useRef<any>({})

    const handleLogin = () => {
      const listKey = ["email", "password"];
      let objParams: any = {}

      listKey?.map((obj: any) => {
        objParams[obj] = formRef.current[obj]?.value
      })
       serviceLogin(objParams)
    }

    const serviceLogin = async(params: any) => {
       await new Promise((resolve) => setTimeout(resolve, 300))
       try{
        const req = await postRequest({ path: `https://take-home-test-api.nutech-integrasi.com/login`, params })
        console.log(req)
        navigate('/dashboard')
       } catch(e){
        console.log(e)
       }
    }

    const handleSignUp = () => {
        navigate('/signup')
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
                                <Form.Control type="password" className='fs-12' placeholder="Masukan password anda" 
                                ref={(el: any) => (formRef.current[`password`] = el)} />
                            </DFlexColumn>
                           
                           <Button variant='danger' className='w-100' onClick={handleLogin}>Masuk</Button>
                           <div className='mt-4 text-center fs-12 w-100'>
                              Belum punya akun? Register <span className='fw-500 text-danger cursor-pointer' onClick={handleSignUp}>di sini</span>
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