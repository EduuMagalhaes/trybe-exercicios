const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Test função uppercase transformar string minuscula em maiuscula', (done) => {
  uppercase('abcdef', (param) => {
    try {
      expect(param).toEqual('ABCDEF');
      done();
    } catch (erro) {
      done(erro);
    }
  });
});