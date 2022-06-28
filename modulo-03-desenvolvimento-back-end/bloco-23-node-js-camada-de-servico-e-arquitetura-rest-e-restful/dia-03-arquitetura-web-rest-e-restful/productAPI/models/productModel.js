const connection = require('./connection');

const addProduct = async ({ name, brand }) => {
  const [{ insertId }] = await connection.query(
    'INSERT INTO products (name, brand) VALUES (?, ?);',
    [name, brand],
  );
  return insertId;
};

const listProducts = async () => {
  const [products] = await connection.query('SELECT * FROM products;');
  return products;
};

const getProduct = async (id) => {
  const [[product]] = await connection.query('SELECT * FROM products WHERE id = ?;', [id]);
  return product;
};

const updateProduct = async (id, { name, brand }) => {
  await connection.query(
    'UPDATE products SET name = ?, brand = ? WHERE id = ?;',
    [name, brand, id],
  );
};

const deleteProduct = async (id) => {
  await connection.query('DELETE FROM products WHERE id = ?;', [id]);
};

module.exports = { addProduct, listProducts, getProduct, updateProduct, deleteProduct };
