import React from 'react'
import Input from './'

export default {
  title: 'Input'
}

export const Basic = () => (
  <Input placeholder="Email address" />
)

export const Disabled = () => (
  <Input disabled placeholder="Email address" />
)
