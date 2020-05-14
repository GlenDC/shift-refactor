import { RefactorSession } from "../src/index";
import { parseScript as parse } from "shift-parser";
import Shift from 'shift-ast';

import chai from "chai";

describe("lookupVariable", function() {
//TODO
});
describe("lookupVariableByName", function() {
  it("should return variables by name", () => {
    let ast = parse(`var a = 2; var b = 3; (function(b){ var a = "foo" }())`);
    const refactor = new RefactorSession(ast);
    const varsA = refactor.lookupVariableByName('a');
    chai.expect(varsA).to.be.lengthOf(2);
    const varsB = refactor.lookupVariableByName('b');
    chai.expect(varsB).to.be.lengthOf(2);
  });
});
  