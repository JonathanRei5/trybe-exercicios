const sinon = require('sinon');
const { expect, use } = require('chai');
const bookService = require('../../../services/BooksService');
const { Book: bookModel } = require('../../../database/models');
const data = require('../mock/data');
const chaiAsPromised = require('chai-as-promised');

use(chaiAsPromised);

describe('Service Book', () => {

  afterEach(sinon.restore);

  describe('#getAll', () => {

    it('chama Book.findAll', async () => {
      sinon.stub(bookModel, 'findAll');
      await bookService.getAll();
      expect(bookModel.findAll.calledWithExactly({ order: ['title'] })).to.be.true;
    });

    describe('quando existem livros', async () => {
      it('retorna um array com os livros', async () => {
        sinon.stub(bookModel, 'findAll').resolves(data.books);
        const books = await bookService.getAll();
        expect(books).to.be.an('array').equals(data.books);
      });
    });

    describe('quando não existem livros', async () => {
      it('retorna um array vazio', async () => {
        sinon.stub(bookModel, 'findAll').resolves([]);
        const books = await bookService.getAll();
        expect(books).to.be.an('array').that.is.empty;
      });
    });

  });

  describe('#getById', () => {

    it('chama Book.findByPk', async () => {
      sinon.stub(bookModel, 'findByPk');
      await bookService.getById(1);
      expect(bookModel.findByPk.calledWithExactly(1)).to.be.true;
    });

    describe('quando o livro existe', async () => {
      it('retorna o livro', async () => {
        sinon.stub(bookModel, 'findByPk').resolves(data.books[0]);
        const book = await bookService.getById(1);
        expect(book).to.be.an('object').equals(data.books[0]);
      });
    });

    describe('quando o livro não existe', async () => {
      it('retorna null', async () => {
        sinon.stub(bookModel, 'findByPk').resolves(null);
        const book = await bookService.getById(1);
        expect(book).to.be.null;
      });
    });

  });

  describe('#getByAuthor', () => {

    it('chama Book.findAll', async () => {
      sinon.stub(bookModel, 'findAll');
      await bookService.getByAuthor('Fulano');
      expect(bookModel.findAll.calledWithExactly({
        where: { author: 'Fulano' },
        order: ['title'],
      })).to.be.true;
    });

    describe('quando existem livros', async () => {
      it('retorna um array com os livros', async () => {
        sinon.stub(bookModel, 'findAll').resolves([data.books[0]]);
        const books = await bookService.getByAuthor('Fulano');
        expect(books).to.be.an('array').eqls([data.books[0]]);
      });
    });

    describe('quando não existem livros', async () => {
      it('retorna um array vazio', async () => {
        sinon.stub(bookModel, 'findAll').resolves([]);
        const books = await bookService.getByAuthor('Fulano');
        expect(books).to.be.empty;
      });
    });

  });

  describe('#create', () => {

    it('chama Book.create', async () => {
      sinon.stub(bookModel, 'create');
      await bookService.create(data.bookToCreate);
      expect(bookModel.create.calledWithExactly(data.bookToCreate)).to.be.true;
    });

    describe('quando os dados estão corretos', async () => {
      it('retorna o livro criado', async () => {
        sinon.stub(bookModel, 'create').resolves(data.books[0]);
        const book = await bookService.create(data.bookToCreate);
        expect(book).to.be.an('object').equals(data.books[0]);
      });
    });

    describe('quando os dados estão incorretos', async () => {
      it('Lança uma exceção', async () => {
        sinon.stub(bookModel, 'create').throws(new Error());
        const book = bookService.create(data.incorrectBookToCreate);
        return expect(book).to.be.rejectedWith(Error);
      });
    });

  });

  describe('#update', () => {

    it('chama Book.update', async () => {
      sinon.stub(bookModel, 'update').resolves([1]);
      await bookService.update(1, data.bookToUpdate);
      expect(bookModel.update.calledWithExactly(
        data.bookToUpdate,
        { where: { id: 1 } },
      )).to.be.true;
    });

    describe('quando o livro é atualizado', async () => {
      it('retorna true', async () => {
        sinon.stub(bookModel, 'update').resolves([1]);
        const result = await bookService.update(1, data.bookToUpdate);
        expect(result).to.be.true;
      });
    });

    describe('quando o livro não é atualizado', async () => {
      it('retorna false', async () => {
        sinon.stub(bookModel, 'update').resolves([0]);
        const result = await bookService.update(1, data.incorrectBookToUpdate);
        expect(result).to.be.false;
      });
    });

  });

  describe('#remove', () => {

    it('chama Book.destroy', async () => {
      sinon.stub(bookModel, 'destroy').resolves(1);
      await bookService.remove(1);
      expect(bookModel.destroy.calledWithExactly({ where: { id: 1 } })).to.be.true;
    });

    describe('quando o livro é removido', async () => {
      it('retorna true', async () => {
        sinon.stub(bookModel, 'destroy').resolves(1);
        const result = await bookService.remove(1);
        expect(result).to.be.true;
      });
    });

    describe('quando o livro não é removido', async () => {
      it('retorna false', async () => {
        sinon.stub(bookModel, 'destroy').resolves(0);
        const result = await bookService.remove(999);
        expect(result).to.be.false;
      });
    });

  });

});
