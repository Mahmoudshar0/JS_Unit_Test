import {
  capitalizeText,
  createArray,
  obj1,
  obj2,
  CheckPositivity,
  MathUtils,
  Mult,
  obj3
} from "../index.js";

import send from "../form.js";

import { assert, expect, should } from "chai";

should();

describe("Problem 1 : capitalizeText", () => {
  it("test on input hamada", () => {
    expect(capitalizeText("hamada")).to.equal("HAMADA");
  });
  it("test on return type", () => {
    expect(capitalizeText("hamada")).a("string");
  });
  it("test number of params", () => {
    // edited in the main function in the index.js file
    expect(() => capitalizeText(2)).to.throw();
  });
  it("test number of params", () => {
    expect(() => capitalizeText("hamada", "ali")).to.throw();
  });
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
describe("Problem 2 : createArray", function () {
  it("test on return type", function () {
    expect(createArray(10)).to.be.an("array");
  });

  it("test on input 3", () => {
    expect(createArray(3)).to.be.an("array").has.length(3).also.include(1);
  });

  it("test a delay", async function () {
    this.timeout(7000);
    // await delay(5000);
    true.should.to.equal(true);
  });

  it("i will implement this logic later");
});

describe("Problem 3 : obj", () => {
  it("test with expect", () => {
    expect(obj1).to.equal(obj2);
  });
  it("test with assert", () => {
    assert.equal(obj1, obj2);
  });
  it("test with should", () => {
    obj1.should.equal(obj2);
  });
});

describe("Problem 4 : CheckPositivity", () => {
  it("test with expect x= 4", () => {
    expect(CheckPositivity(4)).to.equal(true);
  });
  it("test with expect x = -1", () => {
    expect(CheckPositivity(-1)).to.equal(false);
  });
  it("test with expect x= 0", () => {
    expect(CheckPositivity(0)).to.equal(false);
  });
  it("test with assert x = 4", () => {
    assert.equal(CheckPositivity(4), true);
  });
  it("test with assert x = -1", () => {
    assert.equal(CheckPositivity(-1), false);
  });
  it("test with assert x = 0", () => {
    assert.equal(CheckPositivity(0), false);
  });
  it("test with should x = 4", () => {
    CheckPositivity(4).should.equal(true);
  });
  it("test with should x = -1", () => {
    CheckPositivity(-1).should.equal(false);
  });
  it("test with should x = 0", () => {
    CheckPositivity(0).should.equal(false);
  });
});

describe("problem 5 MathUtils", () => {
  // put let before MathUtils in the index.js file line 64
  it("check sum method", () => {
    expect(MathUtils).to.respondTo("sum")
  })
  it("check sub method", () => {
    expect(MathUtils).to.respondTo("sub")
  })
  let inst = new MathUtils()
  it("check instance", () => {
    expect(inst).instanceOf(MathUtils)
  })
  it("check validation on sum method", () => {
    expect(() => MathUtils.sum(2,3,4,"fdv")).to.throw()
  })
  it("check validation on sub method", () => {
    expect(() => MathUtils.sub(2,3,4,"fdv")).to.throw()
  })
})

describe("problem 6 Mult", () => {
  it("validate x > 0", () => {
    // edited in the main function in the index.js
    assert.throws(() => Mult(-1), "x must be above zero");
  })

  it("check x > 0", () => {
    assert.isAbove(Mult(1),0)
  })
})

describe("Problem 7 obj3", () => {
  it("check 'a.b[0]' will include {x: 1}", () => {
    assert.include(obj3.a.b[0], {x:1})
  })
})

describe("Problem 9 form validation", () => {
  it("check send function", () => {
    expect(send().number).to.be.a("number")
    expect(send().string).to.be.a("string")
  })
})

describe("Problem 10 bonus solved already");