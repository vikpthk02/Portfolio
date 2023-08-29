import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/96801af6-5157-4022-946d-5d2755700855"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              // onChange={(e) => {
              //   if (e.target.value == "") {
              //     toast("Please entyer your name");
              //   } else if (e.target.value.match(/^[A-Za-z ]+$/)) {
              //     setName(
              //       e.target.value
              //         .replace(/[^\w\s\][^,\[\]\^]/gi, "")
              //         .replace(/[0-9]/g, "")
              //     );
              //   }
              // }}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              // onChange={(e) => {
              //   if (e.target.value == "") {
              //     toast("Please entyer your email");
              //   } else if (
              //     !e.target.value.match(
              //       /^(?!.*(\.com){2})[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
              //     )
              //   ) {
              //     toast("Invalid email", { type: "error" });
              //   }
              // }}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              // onClick={async () => {
              //   if (name) {
              //     toast("Name is required", { type: "error" });
              //   } else if (!validPhone(mobile) && fitnessAge) {
              //     toast("Invalid mobile", { type: "error" });
              //   } else if (!validPhone(mobile) && fitnessAge && mobile) {
              //     toast("Invalid mobile", { type: "error" });
              //   } else if (!dob || dob == null || dob == " ") {
              //     toast("Invalid Date of Birth", { type: "error" });
              //   } else {
              //     onClickNext();
              //   }
              // }}
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
