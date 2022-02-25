import nodemailer from "nodemailer";
import { NextApiHandler } from "next/types";

type bookTourType = {
  tour: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

type contactUsType = {
  firstname: string;
  lastname: string;
  message: string;
  subject: string;
  email: string;
};

type customizedTourType = {
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

type mailOptionsType =
  | {}
  | {
      from: string;
      to: string;
      subject: string;
      html: string;
    };

type dataType<P> = P;

const contact: NextApiHandler = async (req, res) => {
  let data: dataType<typeof req.body> = req.body;

  let mailOptions: mailOptionsType = {};

  const source = req.query.source;

  if (source === "bookTour") mailOptions = dataBookTour(data as bookTourType);
  else if (source === "customizedTour")
    mailOptions = dataCustomizedTour(data as customizedTourType);
  else if (source === "contactUs")
    mailOptions = dataContactUs(data as contactUsType);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    requireTLS: true,
    port: 465,
    secure: true,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  try {
    const emailRes = await transporter.sendMail(mailOptions);

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

const dataContactUs = (data: contactUsType) => ({
  from: data.email,
  to: process.env.USERNAME,
  subject:
    data.subject ||
    `E-mail from ${data.firstname} ${data.lastname} for booking a tour`,
  html: `<p>A guest has submitted an query related via the contact us form</p><br>
			    <p><strong>From: </strong> ${data.email} </p>
			    <p><strong>Name: </strong> ${data.firstname} ${data.lastname} </p>
			    <p><strong>Message: </strong> ${data.message} </p><br>
			    `,
});

const dataBookTour = (data: bookTourType) => {
  return {
    from: data.email,
    to: `${process.env.USERNAME}`,
    subject: data.subject || `E-mail from ${data.name} for booking a tour`,
    html: `<p>A guest has submitted an tour package</p><br>
			    <p><strong>Name: </strong> ${data.name} </p><br>
			    <p><strong>Selected Tour Package: </strong> ${data.tour} </p><br>
			    <p><strong>Message: </strong> ${data.message} </p><br>
			    `,
  };
};

const dataCustomizedTour = (data: customizedTourType) => {
  return {
    from: data.email,
    to: `${process.env.USERNAME}`,
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
  };
};

export default contact;
