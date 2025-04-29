module.exports = (sequelize, DataTypes) => {
    const Proizvod = sequelize.define('Proizvod', {
      naziv: DataTypes.STRING,
      opis: DataTypes.TEXT,
      cena: DataTypes.FLOAT,
      popust: { type: DataTypes.FLOAT, defaultValue: 0 },
      slika: DataTypes.STRING // opcionalno
    });
  
    Proizvod.associate = models => {
      Proizvod.belongsTo(models.Kategorija, { foreignKey: 'kategorijaId' });
    };
  
    return Proizvod;
  };
  