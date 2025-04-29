module.exports = (sequelize, DataTypes) => {
    const Kategorija = sequelize.define('Kategorija', {
      naziv: DataTypes.STRING
    });
  
    Kategorija.associate = models => {
      Kategorija.hasMany(models.Proizvod, { foreignKey: 'kategorijaId' });
    };
  
    return Kategorija;
  };
  