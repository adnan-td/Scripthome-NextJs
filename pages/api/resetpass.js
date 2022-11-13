import { userqueries } from "../../db/users.model";
var nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});

export default async function getuser(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      res.status(200).send({ message: "Please enter the email!" });
    } else if (await userqueries.existsUserWithEmail(email)) {
      var val = Math.floor(1000 + Math.random() * 9000);
      try {
        const mailoptions = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: "To Verify your Email",
          html: `
          <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
          <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Script-Home</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>Thank you for getting in touch with Scripthome. Use the following OTP to complete your Reset-Password procedures. OTP is valid for 5 minutes</p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${val}</h2>
          <p style="font-size:0.9em;">Regards,<br />Scripthome</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          </div>
          </div>
          </div>
          `,
        };
        await transporter.sendMail(mailoptions);
      } catch (e) {
        if (e) console.log(e);
      }
      res.status(201).send({ otp: val * 123456 - 69, expiry: Date.now() + 600000 });
    } else {
      res.status(200).send({ message: "User with the Email does not exists!" });
    }
  }
}
