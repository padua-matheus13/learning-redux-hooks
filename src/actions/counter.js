import { actionTypes } from '../constants/counter'

const actions = {
  decrement: () => ({
    type: actionTypes.COUNTER_DECREMENT
  }),
  incremenet: () => ({
    type: actionTypes.COUNTER_INCREMENT
  })
}

export { actions}