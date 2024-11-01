import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { DFlexColumn } from '../../../styles/styled/flex.styled'
import { getAll } from '../../services/main.service'
import axios from 'axios'
import { get } from 'lodash'

export default function TopUpPage() {
  return (
    <Row>
      <Col md={4}>
      <DFlexColumn className='justify-content-center h-100 gap-2'>
      <div className='fs-12'>Selamat Datang</div>
      <div className='fs-20 fw-500'>Yayuk Setiawan</div>
      </DFlexColumn>
      
      </Col>
      <Col md={8}>
        <CardBalance />
      </Col>
    </Row>
  )
}

function CardBalance() {
  const [dtBalance, setDtBalance] = React.useState<any>();
  const source = axios.CancelToken.source()
  const serviceBalance = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    try {
      const url = `https://take-home-test-api.nutech-integrasi.com/balance`
      const req = await getAll(url, {}, source.token)
      const data = get(req, 'data')
      setDtBalance(data)
      console.log(req)
    } catch (error) {
      
    } 
  }

  useEffect(() => {
    serviceBalance()
  },[])

  return (
    <Card className='bg-danger text-white'>
    <Card.Body>
      <DFlexColumn className='gap-1'>
      <div className='fs-12'>Saldo Anda</div>
      <div className='fs-20 fw-500'>Rp.{dtBalance?.balance}</div>
      <div className='fs-12'>lihat saldo</div>
      </DFlexColumn>
      
    </Card.Body>
   </Card>
  )
}
