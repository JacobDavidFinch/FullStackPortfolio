var express = require("express");
const app = express();
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

var transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.UN,
      pass: process.env.PASS,
    },
  })
);
console.log(process.env.UN);
console.log(process.env.PASS);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});
module.exports = function (app) {
  app.post("/api/email", (req, res) => {
    console.log("grabbed");
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var reason, reasonResp;
    if (req.body.project === "on") {
      reason = "project";
      reasonResp = " about your project";
    } else if (req.body.hiring === "on") {
      reason = "hiring";
      reasonResp = " about your position available";
    } else {
      reason = "none specified";
      reasonResp = "";
    }

    var content = `name: ${name} \n email: ${email} \n message: ${message} \n reason: ${reason} `;

    var mail = {
      from: name,
      to: "JacobDavidFinch@gmail.com", //Change to email address that you want to receive messages on
      subject: "New Message from Contact Form",
      text: content,
    };

    var notifyMailer = {
      from: "Jacob Finch",
      to: email,
      subject: "Expect a follow up shortly - Jacob Finch",
      text:
        "Dear " +
        name +
        ", \n\nThis is an automated message on behalf of Jacob Finch. Thank you for reaching out to me via my contact form on my site. I will follow up with you as soon as possible to discuss further details" +
        reasonResp +
        ".\n\nBest, \nJacob Finch",
    };

    // sending my message to client
    transporter.sendMail(notifyMailer, (err, data) => {
      if (err) {
      } else {
      }
    });

    // sending message to me via client contact form
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: "fail",
        });
      } else {
        res.json({
          msg: "success",
        });
      }
    });
  });
};
