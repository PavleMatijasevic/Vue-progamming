module.exports = (sequelize, DataTypes) => {
    const StavkaPorudzbine = sequelize.define('StavkaPorudzbine', {
      kolicina: DataTypes.INTEGER,
      cena: DataTypes.FLOAT
    });
  
    StavkaPorudzbine.associate = models => {
      StavkaPorudzbine.belongsTo(models.Porudzbina, { foreignKey: 'porudzbinaId' });
      StavkaPorudzbine.belongsTo(models.Proizvod, { foreignKey: 'proizvodId' });
    };
  
    return StavkaPorudzbine;
  };
  