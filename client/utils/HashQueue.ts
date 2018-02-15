interface NodesType {
  weight: number;
  key: string;
  value: any;
}
export default class HashQueue {
  private nodes : Array<NodesType> = [];

  /**
   * Add to queue and sort.
   * 
   * @param weight 
   * @param key 
   * @param value 
   */
  enqueue(weight:number, key:string, value : any = {}):void {
    this.nodes.push({ key, weight, value });
    this.sort();
  }

  /**
  * Return the first item in the queue
  */
  dequeue():NodesType {
    return this.nodes.shift();
  }

  /**
   * Return all nodes in queue.
   */
  get(): Array<NodesType> {
    return this.nodes;
  }

  /**
  * Sort the nodes in queue by weight
  */
  sort():void {
    this.nodes.sort(function (a, b) {
      return a.weight - b.weight;
    });
  }

  /**
  * Check to see if its empty
  * @return Boolean
  */
  isEmpty() : boolean {
    return !this.nodes.length;
  }
};