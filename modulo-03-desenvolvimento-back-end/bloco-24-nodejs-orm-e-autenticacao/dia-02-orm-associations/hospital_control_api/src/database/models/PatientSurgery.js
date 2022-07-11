module.exports = (sequelize, _DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery',
    {},
    {
      tableName: 'Patient_surgeries',
      timestamps: false,
    },
  );

  return PatientSurgery;
};
