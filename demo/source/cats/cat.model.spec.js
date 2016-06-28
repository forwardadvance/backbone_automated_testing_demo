var Cat = require('./cat.model');

describe('Cat Model', () => {

  var cat;
  beforeEach(() => {
    cat = new Cat();
  })

  it('can be instantiated', () => {
    expect(cat instanceof Cat).toBe(true);
  })
})
