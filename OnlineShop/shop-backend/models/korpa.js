module.exports = (sequelize, DataTypes) => {
    const Korpa = sequelize.define('Korpa', {});
  
    Korpa.associate = models => {
      Korpa.belongsTo(models.Korisnik, { foreignKey: 'korisnikId' });
      Korpa.belongsToMany(models.Proizvod, { through: 'KorpaProizvodi', foreignKey: 'korpaId' });
    };
  
    return Korpa;
  };
  