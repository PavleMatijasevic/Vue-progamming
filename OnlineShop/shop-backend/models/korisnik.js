module.exports = (sequelize, DataTypes) => {
    const Korisnik = sequelize.define('Korisnik', {
      ime: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      lozinka: DataTypes.STRING,
      uloga: { type: DataTypes.STRING, defaultValue: 'kupac' } // 'kupac' ili 'admin'
    });
  
    Korisnik.associate = models => {
      Korisnik.hasMany(models.Porudzbina, { foreignKey: 'korisnikId' });
      Korisnik.hasOne(models.Korpa, { foreignKey: 'korisnikId' });
    };
  
    return Korisnik;
  };
  