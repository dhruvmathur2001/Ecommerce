const paypal = require('paypal-rest-sdk');

paypal.configure({
    mode : 'sandbox',
    client_id : 'AVB2FEI8JIG3XEtvqkNTyxaowzJvVufSPGzMlJXR-tNAS8hY9yCZ0A0zxMOBV2g54jR6OOOPQ9Cf-FE6' ,
    client_secret : 'EDsNcJMYf2ikygqqNr_L2YqOhl1ud_l-7r5lVKolYU1VBsuIkCqt616y_OqYo4XeB4RwO_la_YGv4T13'
})

module.exports = paypal;