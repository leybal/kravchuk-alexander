const express = require('express');
const router = express.Router();
const Mailgun = require('mailgun').Mailgun;

const api_key = 'key-e04a5d66ffbc03a32f578c44c767b178';
const domain = 'sandboxd67776a6525f4a8e95a49789eeed60f7.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


router.get('/*', function(req, res, next) {
  res.sendFile('index.html');
});

router.post('/sending-form', function(req, res, next) {
  const { email, text } = req.body;
  const data = {
    from: "Kravchuk Alexander <kravchuk018@gmail.com>",
    to: 'kravchuk018@gmail.com',
    bcc: email,
    subject: 'Curriculum Vitae',
    text: `Email: ${email}. Message: ${text}`
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
      res.json({status: 500});
    } else {
      res.send(body);
    }
  });
});


module.exports = router;
