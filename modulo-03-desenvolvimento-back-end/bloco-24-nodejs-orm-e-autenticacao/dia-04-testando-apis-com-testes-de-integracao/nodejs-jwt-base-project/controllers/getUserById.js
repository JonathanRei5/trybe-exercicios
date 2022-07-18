const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários no banco', error: err.message });
  }
};
