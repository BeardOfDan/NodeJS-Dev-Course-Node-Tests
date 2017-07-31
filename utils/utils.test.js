"use strict";

const expect = require('expect');

const utils = require('./utils');

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      let res = utils.add(33, 11);

      expect(res).toBe(44).toBeA("number");
    });

    it("should asynchronously add two numbers", (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA("number");
        done();
      });
    });
  });

  describe("#square", () => {
    it("should square a number", () => {
      let res = utils.square(5);

      expect(res).toBe(25).toBeA("number");
    });

    it("should asynchronously square a number", (done) => {
      utils.asyncSquare(5, (square) => {
        expect(square).toBe(25);
        done();
      });
    });
  });

  describe("#misc", () => {
    it("should verify first and last names are set", () => {
      let res = {
        location: "Concord",
        age: 24
      };
      utils.setName(res, "Dan Roberts");

      expect(res).toInclude({firstName: "Dan", lastName: "Roberts"});
    });
  });
});
