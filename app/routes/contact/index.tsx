import type { ActionFunction, LinksFunction } from "remix";
import { redirect, useActionData, Form, useTransition, json } from "remix";
import styles from "~/styles/contact.css";
import globalStyles from "~/styles/global.css";
// const smtpTransport = require("nodemailer-smtp-transport");
// const nodemailer = require("nodemailer");

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: globalStyles },
  ];
};

// Note the "action" export name, this will handle our form POST
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const interest = formData.get("interest");

  // const transporter = nodemailer.createTransport(
  //   smtpTransport({
  //     service: "gmail",
  //     host: "smtp.gmail.com",
  //     auth: {
  //       user: process.env.UN,
  //       pass: process.env.PASS,
  //     },
  //   })
  // );

  // transporter.verify((error: any, success: any) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Server is ready to take messages");
  //   }
  // });

  const content = `name: ${name} \n email: ${email} \n message: ${message} \n interest: ${interest} `;
  console.log(content);
  // const notifyMe = {
  //   from: name,
  //   to: "JacobDavidFinch@gmail.com", //Change to email address that you want to receive messages on
  //   subject: "New Message from Contact Form",
  //   text: content,
  // };

  // const notifyMailer = {
  //   from: "Jacob Dykstra",
  //   to: email,
  //   subject: "Expect a follow up shortly - Jacob Finch",
  //   text: `Dear
  //     ${name}
  //     , \n\nThis is an automated message on behalf of Jacob Finch. Thank you for reaching out to me via my contact form on my site. Expect a follow up within one business day.
  //     .\n\nBest, \nJacob Finch`,
  // };

  // // sending my message to client
  // transporter.sendMail(notifyMailer);

  // // sending message to me via client contact form
  // const [err, res] = transporter.sendMail(notifyMe, (err: any, data: any) => {
  //   if (err) {
  //     return [err, null];
  //   } else {
  //     return [null, data];
  //   }
  // });

  // if (err) return json({ errors: err });

  return redirect(`/contact/confirmation`);
};

export default function Contact() {
  const actionData = useActionData();
  const transition = useTransition();

  return (
    <main className="card">
      <Form method="post" className="contact__form">
        <fieldset disabled={transition.state === "submitting"}>
          <div className="contact__header">
            <h2 className="heading-secondary">Contact me.</h2>
          </div>
          <div className="top-input">
            <div className="form__group first-input inputs-group">
              <input
                defaultValue={actionData?.values.name}
                type="text"
                className="form__input"
                placeholder="Full name"
                name="name"
                required
              />
              <label htmlFor="name" className="form__label">
                Full name
              </label>
            </div>

            <div className="form__group inputs-group">
              <input
                type="email"
                className="form__input"
                placeholder="Email address"
                name="email"
                required
              />
              <label htmlFor="email" className="form__label">
                Email address
              </label>
            </div>
          </div>

          <div className="form__group">
            <textarea
              className="form__textarea"
              name="message"
              rows={4}
              placeholder="Reason for contact"
              required
            />
            <label htmlFor="message" className="form__label">
              Message
            </label>
          </div>

          <div className="radio">
            <div className="radio-buttons">
              <div className="form__radio-group">
                <input
                  type="radio"
                  className="form__radio-input"
                  id="hiring"
                  value="hiring"
                  name="interest"
                />
                <label htmlFor="hiring" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  <b>Hiring.</b>
                </label>
              </div>

              <div className="form__radio-group">
                <input
                  type="radio"
                  className="form__radio-input"
                  id="Contract"
                  value="Contract"
                  name="interest"
                />
                <label htmlFor="Contract" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  <b>Contract.</b>
                </label>
              </div>
              <div className="form__radio-group">
                <input
                  type="radio"
                  className="form__radio-input"
                  id="open source"
                  value="open source"
                  name="interest"
                />
                <label htmlFor="open source" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  <b>Open Source.</b>
                </label>
              </div>
            </div>
            <div className="form__group">
              <button
                className="button"
                type="submit"
                name="action"
                value="create"
              >
                <b>
                  {" "}
                  {transition.state === "submitting" ? "Sending..." : "Send."}
                </b>
              </button>
            </div>
          </div>
        </fieldset>
      </Form>
    </main>
  );
}
