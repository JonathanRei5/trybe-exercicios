// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("../exercicios/exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    getPokemonDetails(({ ability }) => ability === 'Dançar lambada', (error, message) => {
      try {
        expect(error).toBeInstanceOf(Error);
        expect(message).toBeNull();
        done();
      }
      catch (error) {
        done(error);
      }
    });
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    getPokemonDetails(({ type }) => type === 'Fire', (error, message) => {
      try {
        expect(error).toBeNull();
        expect(typeof message).toBe('string');
        done();
      }
      catch (error) {
        done(error);
      }
    });
  });
});
