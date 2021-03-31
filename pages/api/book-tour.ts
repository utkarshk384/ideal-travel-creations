import nodemailer from "nodemailer";
import { NextApiHandler } from "next/types";

type dataType = {
  tour: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contact: NextApiHandler = async (req, res) => {
  const data: dataType = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    requireTLS: true,

    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: data.email,
      to: `${process.env.USER}, utkarshk384@gmail.com`,
      subject: data.subject || `E-mail from ${data.name} for booking a tour`,
      html: `<p>A guest has submitted an tour package</p><br>
      <p><strong>Name: </strong> ${data.name} </p><br>
      <p><strong>Selected Tour Package: </strong> ${data.tour} </p><br>
      <p><strong>Message: </strong> ${data.message} </p><br>
      `,
    });

    try {
      const response = parseInt(emailRes.response.substring(0, 3));

      if (response === 250) res.status(200).json(data);
      else res.status(400).send("There was a problem while sending the email.");
    } catch (err) {
      res
        .status(400)
        .send("Couldn't parse the response code from the email server.");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

export default contact;
