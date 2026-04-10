const fs = require('fs/promises');
const path = require('path');

const contactsFilePath = path.join(__dirname, '..', 'data', 'contacts.json');

async function readContacts() {
  const fileContent = await fs.readFile(contactsFilePath, 'utf-8');
  return JSON.parse(fileContent);
}

async function saveContact(contact) {
  const contacts = await readContacts();
  contacts.push(contact);

  await fs.writeFile(contactsFilePath, JSON.stringify(contacts, null, 2));
}

module.exports = {
  saveContact,
};
