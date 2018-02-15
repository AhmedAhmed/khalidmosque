import { DEALS_REQUEST, DEALS_RECEIVED, CLEAR_DEALS_REQUEST } from '../constants/ActionTypes'

//interface for Trips.
interface TripsJSON {
  transport: string,
  departure: string,
  arrival: string,
  duration: {
    h: number,
    m: number
  },
  cost: number,
  discount: number,
  reference: string
}

const initialState : Array<TripsJSON> = [];

export default function deals(state = initialState, action: any) : Array<TripsJSON> {
  switch (action.type) {
    case DEALS_RECEIVED:
      if (action.payload.deals) {
        state = action.payload.deals;
      } else {
        state = [];
      }
      break;
    case CLEAR_DEALS_REQUEST:
      state = [];
      break;
  }
  return state;
}
