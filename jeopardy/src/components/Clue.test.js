import React from 'react'
import { shallow } from 'enzyme'
import Clue from './Clue'
import { clue } from '../data/fixtures'

const props = { clue }

describe('Clue', () => {
  let clueWrapper = shallow(<Clue {...props} />)

  it('sets `reveal` to be `false`', () => {
    expect(clueWrapper.state().reveal).toBe(false)
  })

  it('renders the value', () => {
    expect(clueWrapper.find('h4').text()).toEqual(clue.value.toString())
  })

  it('renders the question', () => {
    expect(clueWrapper.find('h5').at(0).text()).toEqual(clue.question)
  })

  it('sets the answer with the `text-hidden` class', () => {
    expect(clueWrapper.find('h5').at(1).hasClass('text-hidden'))
  })

  describe('when rendering a clue with no value', () => {
    beforeEach(() => {
      props.clue.value = undefined

      clueWrapper = shallow(<Clue {...props} />)
    })
    it('displays the value as `unknown`', () => {
      expect(clueWrapper.find('h4').text()).toEqual('unknown')
    })
  })

  describe('when clicking on the Clue', () => {
    beforeEach(() => {
      clueWrapper.simulate('click')
    })

    it('updates `reveal` to be `true`', () => {
      expect(clueWrapper.state().reveal).toBe(true)
    })

    it('applies the `text-revealed` class to the clue answer', () => {
      // console.log(clueWrapper.debug())
      expect(clueWrapper.find('h5').at(1).hasClass('text-revealed')).toBe(true)
    })
  })
})