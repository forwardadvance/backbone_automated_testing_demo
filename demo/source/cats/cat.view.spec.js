var CatView = require('./cat.view');
var Cat = require('./cat.model');

describe('Cat View', () => {

  var cat;
  beforeEach(() => {
    cat = new Cat();
  })


  describe('with a model', () => {
    var catView;
    beforeEach(() => {
      catView = new CatView({model: cat});
    })
    it('is a catView', () => {
      expect(catView instanceof CatView).toBe(true);
    })
    it('can set a name', () => {
      catView.setName()
      expect(cat.get('name')).toBe("Mikey");
    })
  })

})
