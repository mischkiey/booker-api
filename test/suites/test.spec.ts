import should from 'should';

describe('#indexOf', function() {
  it('should return -1 if element is not found', function() {
    should([1, 2, 3].indexOf(4)).equal(-1);
  });
});