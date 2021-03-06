import * as sinon from "sinon";
import * as chai from "chai";
import Todos from "../src/todo";

// spy提供函数的调用信息,不会影响其行为
// describe("测试Todos", function() {
//   it("spy print", () => {
//     const store = { save() {} };
//     const t = new Todos(store);
//     // 用sinon.spy监控console.log方法,并不会替换console.log
//     sinon.spy(console, "log");
//     t.add("eat");
//     t.add("sleep");
//     t.print();
//     // @ts-ignore
//     chai.expect(console.log.calledOnce).to.be.true;
//   });
// });

// describe("测试Todos2", function() {
//   // stub完全取代了功能
//   it("stub print", () => {
//     const store = { save() {} };
//     const t = new Todos(store);
//     // t.add
//     const stubAdd = sinon.stub(t, "add").callsFake(() => {});
//     stubAdd("eat");
//     stubAdd("sleep");
//     t.print();
//     // @ts-ignore
//     chai.expect(stubAdd.calledTwice).to.be.true;
//   });
// });

describe("测试Todos3", function() {
  // 通过组合spy和stub,可以轻松替换整个对象
  it("mock print", () => {
    const store = { save() {} };
    const t = new Todos(store);
    const mock = sinon.mock(console);
    mock.expects("log").calledOnce;
    t.add("eat");
    t.add("dark");
    t.print();
    mock.verify();
  });
});
