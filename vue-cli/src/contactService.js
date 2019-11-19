import Axios from 'axios';

const url = 'http://localhost:5000/API/contact/';

class ContactService {
  //post msg
  static getContact() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await Axios.post(url);
        const data = res.data;
        resolve(
          data.map(contact => ({
            ...contact
          }))
        );
      } catch(err) {
        reject(err);
      }
    });
  }
  //Create msg
  static insertContact(contact) {
    return Axios.contact(url, {
      contact
    });
  }
}

export default ContactService;
