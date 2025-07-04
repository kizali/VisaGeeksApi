const mongoose = require('mongoose');

const visaSchema = new mongoose.Schema({
  nom_prenom: String,
  cin: String,
  date_naissance: String,
  lieu_naissance: String,
  sexe: String,
  nationalite: String,
  adresse: String,
  num_passeport: String,
  date_delivrance: String,
  date_expiration: String,
  statut: String,
  but: String,
  duree: String,
  adresse_etranger: String,
  financeur: String,
  visa_passe: String,
  details_visa: String,
});

module.exports = mongoose.model('Visa', visaSchema);