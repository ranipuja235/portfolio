const express = require('express');
const { saveContact } = require('../utils/contactStore');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Name, email, and message are required.',
      });
    }

    const newContact = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    await saveContact(newContact);

    return res.status(201).json({
      message: 'Message received successfully.',
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
