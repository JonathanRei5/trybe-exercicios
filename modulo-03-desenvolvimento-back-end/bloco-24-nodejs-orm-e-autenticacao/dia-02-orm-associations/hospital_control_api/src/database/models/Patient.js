module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient',
    {
      patientId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fullname: DataTypes.STRING,
      planId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      tableName: 'Patients',
      timestamps: false,
      underscored: true,
    },
  );

  return Patient;
};
