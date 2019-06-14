import sum from "../src/sum";
import * as assert from "assert"; // node断言
import * as chai from "chai"; // 通用 浏览器和node都可以用

/**
 * 通过describe定义一个分组
 */
describe("测试sum.ts", () => {
  it("1+1=2", () => {
    assert.equal(sum(1, 1), 2);
  });
  it("2+2=4", () => {
    chai.expect(2 + 2).to.be.equal(4);
  });
  it("1+2=3", () => {
    chai.expect(1 + 2 === 3).to.be.ok;
  });
});
