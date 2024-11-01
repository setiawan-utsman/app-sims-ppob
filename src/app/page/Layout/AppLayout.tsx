import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { DFlex, DFlexColumn } from '../../../styles/styled/flex.styled'
import styled from 'styled-components'

export default function AppLayout() {
  return (
   <Container>
     <DFlexColumn>
      <HeaderLayout />
      <div className='w-100'>
      <Outlet />
      </div>
     </DFlexColumn>
   </Container>
  )
}

function HeaderLayout() {
  const menuConfig = [
    {
      title: 'Top Up',
      path: '/topup'
    },
    {
      title: 'Transaction',
      path: '/'
    },
    {
      title: 'Akun',
      path: '/'
    }
  ]
  return (
   <CardHeader className='w-100'>
      <DFlex className='justify-content-between'>
        <div><img src='\static\logo.png' width={40} height={40} alt="logo" /></div>
        <DFlex>
          {menuConfig.map((item: any, index: number) => (
            <ListMenu to={item.path} key={index}>{item.title}</ListMenu>
          ))}
        </DFlex>
      </DFlex>
   </CardHeader>
  )
}

const CardHeader = styled.div`
 padding: 1rem 0 1.2rem;
 border-bottom: 1px solid #dee2e6;
`

const ListMenu = styled(NavLink)`
  color: #000;
  text-decoration: none;
 &.active{
  color: red;
  }
`

