import { useState } from "react";
import emailjs from "@emailjs/browser";



export default function Contact() {
  const [isInput, setIsinput] = useState({
    name:"",
    email:"",
    subject: "",
    message:""
  });
  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_react-portfolio",
      "template_uc4oklu",
      {
        from_name: isInput.name,
        from_email: isInput.email,
        subject: isInput.subject,
        message: isInput.message,
      },
      "ln1072CnsirHuMUYC"
    )
    .then(() => {
      alert("Message sent!");

      setIsinput({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message");
    });
};
  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Contact Me
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            value={isInput.name}
            onChange={(e) => {
              setIsinput({...isInput, name: e.target.value})
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            value={isInput.email}
            onChange={(e) => {
              setIsinput({...isInput, email : e.target.value})
            }}
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border rounded-lg"
            value={isInput.subject}
            onChange={(e) => {
              setIsinput({...isInput, subject:e.target.value})
            }}
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg resize-none"
            value={isInput.message}
            onChange={(e) => {
              setIsinput({...isInput, message:e.target.value})
            }}
          ></textarea>
          <div className="w-full flex justify-center"><button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer"
          >
            Send Message
          </button>
          </div>
        
        </form>
      </div>
    </section>
  );
}