import {TRIPS_RECEIVED} from '../constants/ActionTypes'

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

export default function trips( state : Array<TripsJSON> = initialState, action: any ) : Array<TripsJSON> {
  //insert trips data to state.
  switch(action.type){
    case TRIPS_RECEIVED:
      state = action.payload.json.deals;
      break;
  }

  return state;
}
