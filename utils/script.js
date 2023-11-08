import formData from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: "48d68a0a532685bcdb68a083db6f4a73-262b213e-661603a9",
});

export function sendContactForm(email, name, date, message) {
  console.log("submitting contact form");
  console.log(name, email, date, message);
  console.log(formData);
  mg.messages
    .create("sandboxec35ff63f0604609bc91f0944acb66d1.mailgun.org", {
      from: `${email} <mailgun@sandbox-123.mailgun.org>`,
      to: ["smssearle@gmail.com"],
      subject: `New Booking Request | ${name}`,
      text: `${message} | ${date}`,
      html: `<h1>Testing some Mailgun awesomeness!</h1><br /><p> ${message} | ${date} </p>`,
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.log(err)); // logs any error
}
