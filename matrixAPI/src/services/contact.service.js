import contactRepository from "../repositories/contact.repository.js";

class ContactService {

    async saveContact(data) {

        return await contactRepository.create(data);

    }

    async getContacts() {

        return await contactRepository.getAll();

    }

}

export default new ContactService();