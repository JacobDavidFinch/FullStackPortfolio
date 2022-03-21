import type { ActionFunction, LinksFunction } from "remix";
import { redirect, useActionData, Form, useTransition } from "remix";
import styles from "~/styles/contact.css";
import globalStyles from "~/styles/global.css";

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

  const content = `name: ${name} \n email: ${email} \n message: ${message} \n interest: ${interest} `;
  console.log(`FORM CONTENT: ${content}`);

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
