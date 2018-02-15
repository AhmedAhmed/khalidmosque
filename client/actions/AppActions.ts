import * as types from '../constants/ActionTypes';
import {findCheapest, findFastest} from '../utils/SortTrip';

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

export const tripsRequest = () => ({type: types.TRIPS_REQUEST, payload: {fetching: true} });
export const tripsReceived = (json: any) => ({type: types.TRIPS_RECEIVED, payload: {json} });

export const dealsRequest = (trips: Array<TripsJSON>, departure: string, arrivals: string, type: string) => ({type: types.DEALS_REQUEST, payload:{trips, fetching: true}});
export const dealsReceived = (deals: any) => ({type: types.DEALS_RECEIVED, payload:{deals}});

export const clearDeals = () => ({type: types.CLEAR_DEALS_REQUEST,payload:{} });

const getDomain = () => {
  var domain = window.location.hostname;
  var port = window.location.port;

  return domain + (port != "")? domain+":"+port: domain;
}

const initHeaders: any = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Origin': ''
};


export const loadTrips = () => (dispatch: any) => {
  dispatch( tripsRequest() );
  return fetch("http://"+getDomain()+"/api/deals",{
        headers: initHeaders,
        method:"GET"
      }).then((response:any) => response.json())
        .then( (json: any) => dispatch( tripsReceived(json)));
}

/**
 * Process deals calculation and refresh.
 * 
 * @param trips Trips sent via the wire
 * @param departure starting city.
 * @param arrivals ending city.
 * @param queryType Type of calculation.
 */
export const getDeals = (trips: Array<TripsJSON>, departure: string, arrivals: string, queryType: string) => (dispatch: any) : void => {
  dispatch(dealsRequest(trips, departure, arrivals, queryType));

  var routes : Array<any>;//json routes of optimal selection.

  if ( queryType == "cheapest" ){
    routes = findCheapest(trips, departure, arrivals);
  } else if(queryType == "fastest"){
    routes = findFastest(trips, departure, arrivals);
  } else {
    routes = null;
  }

  //update the store !!
  dispatch(dealsReceived(routes));
}