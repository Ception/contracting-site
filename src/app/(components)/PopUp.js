import React from "react";
import Popup from "reactjs-popup";
import { sendContactForm } from "@/utils/script";

export const Modal = (email) => (
  <Popup
    overlayStyle={{
      background: "rgba(0,0,0,0.7)",
      backdropFilter: "blur(5px)",
    }}
    trigger={<button>Get a Quote</button>}
    modal
    nested
  >
    {(close) => (
      <div className="modal p-2 md:p-4 lg:p-8 bg-black text-slate-200 w-11/12 md:max-w-4/5 lg:max-w-3/4 transform transition-transform duration-300 scale-90 hover:scale-100">
        <button
          className="close text-slate-200 hover:text-red-700"
          onClick={close}
        >
          &times;
        </button>
        <div className="header text-2xl mb-4">Request a Quote</div>
        <div className="content">
          <form>
            <div className="mb-4">
              <label className="block text-sm">Name</label>
              <input
                className="w-full p-2 mt-1 bg-black border-2 border-red-700 rounded"
                type="text"
                id="name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Email</label>
              <input
                className="w-full p-2 mt-1 bg-black border-2 border-red-700 rounded"
                type="email"
                placeholder={email ? email.email : "Type your email"}
                id="email"
              ></input>
            </div>
            <div className="mb-4">
              <label className="block text-sm">Date</label>
              <input
                className="w-full p-2 mt-1 bg-black border-2 border-red-700 rounded"
                type="date"
                id="date"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Message</label>
              <textarea
                className="w-full p-2 mt-1 bg-black border-2 border-red-700 rounded h-32"
                id="message"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="actions flex flex-col sm:flex-row justify-between mt-4">
          <button
            className="button p-2 bg-red-700 hover:bg-red-800 text-slate-200 rounded mb-2 sm:mb-0 sm:mr-2"
            onClick={() => {
              console.log("modal closed");
              close();
            }}
          >
            Close
          </button>
          <button
            className="button p-2 bg-red-700 hover:bg-red-800 text-slate-200 rounded"
            onClick={(e) => {
              e.preventDefault();
              submitContactForm();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    )}
  </Popup>
);

async function submitContactForm() {
  try {
    let email = document.getElementById("email").value;
    if (email === "") {
      email = document.getElementById("email").placeholder;
    }
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value;

    console.log(email, name, date, message);

    let response = await sendContactForm(email, name, date, message);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
