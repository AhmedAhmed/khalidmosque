import HashQueue from './HashQueue';
import HashRoute from './HashRoute';

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

/**
 * Calculates Shortest and cheapest route to take.
 * @param route HashRoute object of connected  routes.
 * @param start Start index
 * @param end destination index
 */
const optimalRoute = (route:any[][], start: string, end: string):Array<any> => {
  const nodes : HashQueue = new HashQueue();
  const distances : Array<any> = [];
  const previous: Array<any> = [];

  let path: Array<any> = [];

  let smallest:any, vertex:string, neighbor:string, alt:number;

  for (vertex in route) {
    if (vertex === start) {
      distances[vertex] = 0;
      nodes.enqueue(0, vertex);
    } else {
      distances[vertex] = Infinity;
      nodes.enqueue(Infinity, vertex);
    }

    previous[vertex] = null;
  }

  while (!nodes.isEmpty()) {
    smallest = nodes.dequeue();

    if (smallest.key === end) {
      path = [];

      while (previous[smallest.key]) {
        path.push(smallest.value);
        smallest = previous[smallest.key];
      }

      break;
    }

    if (!smallest.key || distances[smallest.key] === Infinity) {
      continue;
    }

    for (neighbor in route[smallest.key]) {
      alt = distances[smallest.key] + route[smallest.key][neighbor].weight;

      if( alt < distances[neighbor] ) {
        distances[neighbor] = alt;
        previous[neighbor] = smallest;

        nodes.enqueue(alt, neighbor, route[smallest.key][neighbor].data);
      }
    }
  }

  return path;
}

export const search = (deals:Array<any>, start:string, end:string, weightFn: any): any[] => {
  var graph = new HashRoute();

  graph.convertArrayToHash(deals, 'departure', 'arrival', weightFn)

  return optimalRoute(graph.get(), start, end).reverse();
}

export const findCheapest = (deals: Array<TripsJSON>, start: string, end: string): any[] => {
  return search(deals, start, end, function (deal: TripsJSON) {
    return deal.cost - (deal.cost * (deal.discount / 100));
  });
}

export const findFastest = (deals: Array<TripsJSON>, start: string, end: string): any[] => {
  return search(deals, start, end, function (deal: any) {
    return (parseInt(deal.duration.h) * 60) + parseInt(deal.duration.m);
  });
}