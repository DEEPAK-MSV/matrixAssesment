import contactService from "../services/contact.service.js";

class ContactController {

    async create(req, res, next) {

        try {

            const response = await contactService.saveContact(req.body);

            res.status(201).json({

                success: true,

                message: "Contact Saved Successfully",

                data: response

            });

        } catch (error) {

            next(error);

        }

    }

    async getAll(req, res, next) {

        try {

            const response = await contactService.getContacts();

            res.json({

                success: true,

                data: response

            });

        } catch (error) {

            next(error);

        }

    }

}

export default new ContactController();