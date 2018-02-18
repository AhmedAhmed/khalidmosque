class Test1 {
  d:number;
  name: string;
}

class Test2 {
  test1: Test1;
  name: string;
}

class Test3 {
  test2: Test2;
  name: string;
  getTest2 = () : Test2 => this.test2;
}

const t3 = new Test3();
t3.getTest2().name;
