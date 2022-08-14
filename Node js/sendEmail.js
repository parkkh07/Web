const { info } = require("console");
const nodemailer = require("nodemailer");

const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c6dcecb34f5946",
    pass: "0b28c75c780ab2",
  },
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "usparkkh.go@gmail.com",
  to: "usparkkh.go@gmail.com",
  subject: "test mail",
  text: "node js test mail",
};
send(email_data);
