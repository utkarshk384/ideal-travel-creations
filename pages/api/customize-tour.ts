import nodemailer from "nodemailer";
import { NextApiHandler } from "next/types";
import { RSA_NO_PADDING } from "node:constants";

type dataType = {
  name: string;
  phone: string;
  email: string;
  "country-of-origin": string;
  "travel-date": string;
  duration: number;
  "no-of-adults": number;
  "no-of-children": number;
  "preferred-accommodation": string;
  "entry-sector": string;
  "exit-sector": string;
  "your-interests": string[];
  "other-interests": string;
  "interested-destinations": string[];
  "additional-message": string;
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
      to: `${process.env.USER}`,
      subject: `Custom trip form submission from ${data.name} for booking a tour`,
      html: `<p>A guest has submitted an tour package</p>
        <p><strong>Name: </strong> ${data.name} </p>
        <p><strong>Phone: </strong> ${data.phone || "Not Provided"} </p>
        <p><strong>E-mail: </strong> ${data.email} </p>
        <p><strong>Country of Origin: </strong> ${
          data["country-of-origin"]
        } </p>
        <p><strong>Travel Date: </strong> ${data["travel-date"]} </p>
        <p><strong>Duration: </strong> ${data.duration} </p>
        <p><strong>Number of Adults: </strong> ${data["no-of-adults"]} </p>
        <p><strong>Number of Children: </strong> ${data["no-of-children"]} </p>
        <p><strong>Preferred Accomodation: </strong> ${
          data["preferred-accommodation"]
        } </p>
        <p><strong>Entry Sector: </strong> ${data["entry-sector"]} </p>
        <p><strong>Exit Sector: </strong> ${data["exit-sector"]} </p>
        <p><strong>Their Inerests: </strong> ${data["your-interests"]} </p>
        <p><strong>Other Inerests: </strong> ${
          data["other-interests"] || "Not Provided"
        } </p>
        <p><strong>Interested Destinations: </strong> ${
          data["interested-destinations"]
        } </p>
        <p><strong>Additional Message: </strong> ${
          data["additional-message"] || "Not Provided"
        } </p>
        `,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

  res.status(200).json(req.body);
};

export default contact;
