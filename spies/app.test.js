"use strict";

const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe("App", () => {
  let db = {
    saveUser: expect.createSpy()
  };

  app.__set__("db", db);

  it("should call the spy correctly", () => {
    let spy = expect.createSpy();
    spy("Dan", 24);
    expect(spy).toHaveBeenCalledWith("Dan", 24);
  });

  it("should call saveUser with user object", () => {
    let email = "dude@test.com";
    let password = "asdf";

    app.handleSignUp(email, password);

    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
