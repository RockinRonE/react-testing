import rootReducer from './index'
import * as actions from '../actions'
import { category, categories } from '../data/fixtures'

describe('Root Reducer', () => {
  it('returns the initial state', () => {
    expect(rootReducer({}, {})).toEqual({ category: {}, categories: [] })
  })

  it('sets the categories', () => {
    expect(rootReducer({}, { type: actions.SET_CATEGORIES, categories })).toEqual({ categories, category: {} })
  })

  it('picks a category', () => {
    expect(rootReducer({}, { type: actions.PICK_CATEGORY, category })).toEqual({ categories: [], category })
  })
})