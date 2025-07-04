const Visa = require('../models/RequestVisa');

exports.createVisa = async (req, res) => {
  try {
    const visaData = new Visa(req.body);
    await visaData.save();
    res.status(201).json({ message: 'Formulaire enregistré avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};