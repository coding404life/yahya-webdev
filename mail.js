const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: 'fd0bd7799100abfdc511884177775ffe-4879ff27-f6487be8',
        domain: 'sandbox59de25939c6b4b03b3af55ee81420596.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));


// chunk 4
const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'coding404life@gmail.com',
        subject: subject,
        text: text
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    });
}

module.exports = sendMail