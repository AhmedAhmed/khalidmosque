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

interface EdgeType {
  start: string;
  end: string;
  weight: number;
  data: TripsJSON;
}

export default class HashRoute {
  private hash : any = [];

  add(start:string, end:string, weight:number, edgeData:TripsJSON):void {
    if (!start || !end || weight < 0) {
      throw new Error('Improper edge format')
    }

    const edge : EdgeType = {
      start: start,
      end: end,
      weight: weight,
      data: edgeData
    };

    if (!this.hash[start]) {
      this.hash[start] = {};
    }

    /**
     * Get smallest weighted item and ignore dups.
     */
    if (!this.hash[start][end] || weight < this.hash[start][end].weight) {
      this.hash[start][end] = edge;
    }
  }

  /**
   * Get the hash object.
   * @param index The index point.
   */
  get(index?:string):any[][]{
    return index != undefined?this.hash[index]:this.hash;
  }

  /**
   * Converts Array to HashMap.
   * @param array Array to be converted.
   * @param startProp The property of start val
   * @param endProp end property val
   * @param weightFn weight calculation.
   */
  convertArrayToHash(array:Array<any>, startProp: string, endProp:string, weightFn:Function):void {
    array.forEach((item:any) => {
      this.add(item[startProp], item[endProp], weightFn(item), item);
    });
  }

}