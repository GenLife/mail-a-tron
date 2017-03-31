import React from 'react'
import Welcome from '../components/emails/Welcome'

export default ({ url: { query: { name } } }) => (
  <Welcome name={name} />
)
