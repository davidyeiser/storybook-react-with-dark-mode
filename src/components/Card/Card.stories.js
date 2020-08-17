import React from 'react'
import Button from '../Button'
import Input from '../Input'
import Label from '../Label'

import Card from './'

export default {
  title: 'Card'
}

export const Basic = (props) => (
  <Card>
    <Label>Name</Label>
    <Input placeholder="First name" style={{ marginTop: '4px' }} />
    <Input placeholder="Last name" style={{ marginTop: '4px' }} />

    <Label style={{ marginTop: '12px' }}>Email</Label>
    <Input type="email" placeholder="Email address" style={{ marginTop: '4px' }}/>

    <Label style={{ marginTop: '12px' }}>Password</Label>
    <Input type="password" placeholder="Password" style={{ marginTop: '4px' }} />
    <Input type="password" placeholder="Re-enter password" style={{ marginTop: '4px' }} />

    <Button style={{ marginTop: '12px' }}>Sign Up</Button>
  </Card>
)
