import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("src/data/contacts.json");

class ContactRepository {

    async create(contact) {

        let contacts = [];

        try {

            const data = await fs.readFile(filePath, "utf-8");

            contacts = data ? JSON.parse(data) : [];

        } catch (err) {

            contacts = [];

        }

        contact.id = Date.now();

        contact.createdAt = new Date().toISOString();

        contacts.push(contact);

        await fs.writeFile(
            filePath,
            JSON.stringify(contacts, null, 2)
        );

        return contact;
    }

    async getAll() {

        try {

            const data = await fs.readFile(filePath, "utf-8");

            return data ? JSON.parse(data) : [];

        } catch {

            return [];

        }

    }

}

export default new ContactRepository();