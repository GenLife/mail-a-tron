/* global it, expect, describe */
import React from 'react'
import Welcome from './Welcome'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Welcome', () => {
  it('it renders normally', () => {
    const wrapper = shallow(<Welcome />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('it renders with a name', () => {
    const wrapper = shallow(<Welcome name='João' />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
