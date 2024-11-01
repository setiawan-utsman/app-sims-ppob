import React, { useRef, useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { DFlexColumn, DFlex } from '../../../../styles/styled/flex.styled'
import { useNavigate } from 'react-router-dom'
import { postRequest } from '../../../services/main.service'
import axios from 'axios'
import { get } from 'lodash'
import { toast } from 'react-toastify'

export default function SignupPage() {
    const source = axios.CancelToken.source()
    const navigate = useNavigate()
    const formRef = useRef<any>({})
    const [errors, setErrors] = useState<any>({});

    const handleSignIn = () => {
        navigate('/signin')
    }

    const onRegister = () => {
        if (validateForm()) {
            const listKey = ["email", "first_name", "last_name", "password"];
            let objParams: any = {}

            listKey?.map((obj: any) => {
                objParams[obj] = formRef.current[obj]?.value
            })
            serviceRegister(objParams)
            console.log(objParams)
        }

    }

    const serviceRegister = async (params: any) => {
        await new Promise((resolve) => setTimeout(resolve, 300))
        try {
            const req = await postRequest({ path: `https://take-home-test-api.nutech-integrasi.com/registration`, params, sourceToken: source.token })
            console.log(req);
           navigate('/signin')
        } catch (e) {
            const message = get(e, 'response.data.message')
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    const validateForm = () => {
        const errors: any = {};
        const listKey = ["email", "first_name", "last_name", "password", "password_konfirmasi"];
        listKey?.map((obj: any) => {
            if (!Boolean(formRef.current[obj]?.value)) {
                if (["first_name", "last_name", "password", "email"].includes(obj)) {
                    errors[obj] = `Wajib di isi!`
                }
            } else if (obj === "email") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

                if (!emailRegex.test(formRef.current[obj].value)) {
                    errors[obj] = "Harus dalam format email yang benar!";
                }
            } else if (obj === "password_konfirmasi") {
                const password = formRef.current["password"]?.value;
                const passwordKonfirmasi = formRef.current[obj].value;
                if (password !== passwordKonfirmasi) {
                  errors[obj] = "Password konfirmasi harus sama dengan password!";
                }
              }
        })
        setErrors(errors);
        return Object.keys(errors).length === 0;
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
                            <DFlexColumn className='w-100 gap-3'>
                                <div className='w-100'>
                                    <Form.Control type="email" className='fs-12' placeholder="Masukan email anda"
                                        ref={(el: any) => (formRef.current[`email`] = el)} onChange={validateForm} isInvalid={!!errors?.email} />
                                    {/* <Form.Control.Feedback className='fs-10' type="invalid">{errors?.email}</Form.Control.Feedback> */}
                                </div>

                                <Form.Control type="text" className='fs-12' placeholder="Nama depan"
                                    ref={(el: any) => (formRef.current[`first_name`] = el)} onChange={validateForm} isInvalid={!!errors?.first_name}/>
                                    {/* <Form.Control.Feedback className='fs-10' type="invalid">{errors?.first_name}</Form.Control.Feedback> */}

                                
                                <Form.Control type="text" className='fs-12' placeholder="Nama Belakang"
                                    ref={(el: any) => (formRef.current[`last_name`] = el)} onChange={validateForm} isInvalid={!!errors?.last_name}/>
                                <Form.Control type="password" className='fs-12' placeholder="Buat password anda"
                                    ref={(el: any) => (formRef.current[`password`] = el)} onChange={validateForm} isInvalid={!!errors?.password}/>
                                <div className='w-100'>
                                <Form.Control type="password" className='fs-12' placeholder="Konfirmasi password anda"
                                    ref={(el: any) => (formRef.current[`password_konfirmasi`] = el)} isInvalid={!!errors?.password_konfirmasi}/>
                                  <Form.Control.Feedback className='fs-10' type="invalid">{errors?.password_konfirmasi}</Form.Control.Feedback>
                                </div>
                               
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
                <div style={{ height: "100vh" }}><img className='w-100 h-100' src="\static\IllustrasiLogin.png" alt="" /></div>
            </Col>
        </Row>
    )
}
