'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          id: 0,
          filename: 'FBI Classified',
          encryptionMethod:'RSA'
        },
        {
          id: 1,
          name: 'Non-Compete',
          encryptionMethod: 'AES'
        },
        {
          id:2,
          name:'Federal Laws',
          encryptionMethod:'3DES'
        }
      ]
    });
  }
};