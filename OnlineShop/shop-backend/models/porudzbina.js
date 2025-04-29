module.exports = (sequelize, DataTypes) => {
    const Porudzbina = sequelize.define('Porudzbina', {
      ukupnaCena: DataTypes.FLOAT
    });
  
    Porudzbina.associate = models => {
      Porudzbina.belongsTo(models.Korisnik, { foreignKey: 'korisnikId' });
      Porudzbina.hasMany(models.StavkaPorudzbine, { foreignKey: 'porudzbinaId' });
    };
  
    return Porudzbina;
  };
  