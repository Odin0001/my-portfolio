import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { IoMdMail } from "react-icons/io";
import { BsDiscord } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contacts = () => {
  const form = useRef();
  const [time, setTime] = useState(new Date().getHours());

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4t5yzpf",
      "template_3sor6aq",
      form.current,
      "5so9nC1Pl1cHjpUke"
    );
    e.target.reset();
  };

  return (
    <section id="Contacts">
      <h5
        className={`${
          time >= 12 && time < 16
            ? "text-text-gray-800"
            : time >= 16 && time < 20
            ? "text-sunsetPurple"
            : time >= 20 || time < 6
            ? "text-nightLightBlue"
            : time >= 6 && time < 12 && "text-morningPurple"
        }`}
      >
        Get in Touch
      </h5>
      <h1
        className={`${
          time >= 12 && time < 16
            ? "text-noonDarkOrange"
            : time >= 16 && time < 20
            ? "text-gray-800"
            : time >= 20 || time < 6
            ? "text-nightBlue"
            : time >= 6 && time < 12 && "text-gray-800"
        }`}
      >
        Contact Me
      </h1>
      <div className="xl:w-3/5 w-4/5 mx-auto xl:grid xl:grid-cols-2 grid grid-cols-1 gap-[2rem]">
        <div className="flex flex-col gap-[1.2rem]">
          <article
            className={`bg-transparent p-[1.2rem] rounded-[1.2rem] flex flex-col gap-2 text-center border-2 transition duration-300 ease ${
              time >= 12 && time < 16
                ? "hover:bg-noonBeige border-noonBeige text-gray-800"
                : time >= 16 && time < 20
                ? "hover:bg-sunsetPurple border-sunsetPurple text-gray-800"
                : time >= 20 || time < 6
                ? "hover:bg-nightBlue border-nightPurple text-nightLightBlue"
                : time >= 6 &&
                  time < 12 &&
                  "hover:bg-morningPurple border-morningPurple text-morningPurple hover:text-morningBeige"
            }`}
          >
            <IoMdMail size={20} className="mb-2 mx-auto" />
            <h4>Email</h4>
            <h5>philipjobran009@gmail.com</h5>
            <a
              href="mailto:philipjobran009@gmail.com"
              target="_blank"
              className="mt-3 text-sm inline "
            >
              <button className="w-52 h-14 border rounded-md mx-auto transition duration-300 ease border border-white">
                Send a Message
              </button>
            </a>
          </article>

          <article
            className={`bg-transparent p-[1.2rem] rounded-[1.2rem] flex flex-col gap-2 text-center border-2 transition duration-300 ease ${
              time >= 12 && time < 16
                ? "hover:bg-noonBeige border-noonBeige text-gray-800"
                : time >= 16 && time < 20
                ? "hover:bg-sunsetPurple border-sunsetPurple text-gray-800"
                : time >= 20 || time < 6
                ? "hover:bg-nightBlue border-nightPurple text-nightLightBlue"
                : time >= 6 &&
                  time < 12 &&
                  "hover:bg-morningPurple border-morningPurple text-morningPurple hover:text-morningBeige"
            }`}
          >
            <BsDiscord size={20} className="mb-2 mx-auto" />
            <h4>Discord</h4>
            <h5>P.Jobran#5482</h5>
            <a
              href="https://discordapp.com/users/[892862766354935828]"
              target="_blank"
              className="mt-3 text-sm inline "
            >
              <button className="w-52 h-14 border rounded-md mx-auto transition duration-300 ease border border-white">
                Send a Message
              </button>
            </a>
          </article>

          <article
            className={`bg-transparent p-[1.2rem] rounded-[1.2rem] flex flex-col gap-2 text-center border-2 transition duration-300 ease ${
              time >= 12 && time < 16
                ? "hover:bg-noonBeige border-noonBeige text-gray-800"
                : time >= 16 && time < 20
                ? "hover:bg-sunsetPurple border-sunsetPurple text-gray-800"
                : time >= 20 || time < 6
                ? "hover:bg-nightBlue border-nightPurple text-nightLightBlue"
                : time >= 6 &&
                  time < 12 &&
                  "hover:bg-morningPurple border-morningPurple text-morningPurple hover:text-morningBeige"
            }`}
          >
            <IoLogoWhatsapp size={20} className="mb-2 mx-auto" />
            <h4>WhatsApp</h4>
            <h5>+963 964596819</h5>
            <a
              href="https://api.whatsapp.com/send?phone+963964596819"
              target="_blank"
              className="mt-3 text-sm inline "
            >
              <button className="w-52 h-14 border rounded-md mx-auto transition duration-300 ease border border-white">
                Send a Message
              </button>
            </a>
          </article>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-[1.2rem]"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            style={{ "font-family": "exo", "font-size": "1.2rem" }}
            className={`w-full p-[1.5rem] rounded-lg bg-transparent resize-none text-white border outline-none placeholder:text-xl placeholder:text-gray-800 ${
              time >= 12 && time < 16
                ? "border-noonBeige"
                : time >= 16 && time < 20
                ? "border-sunsetPurple"
                : time >= 20 || time < 6
                ? "border-nightPurple placeholder:text-gray-500"
                : time >= 6 && time < 12 && "border-morningPurple text-black"
            }`}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{ "font-family": "exo", "font-size": "1.2rem" }}
            className={`w-full p-[1.5rem] rounded-lg bg-transparent resize-none text-white border outline-none placeholder:text-xl placeholder:text-gray-800 ${
              time >= 12 && time < 16
                ? "border-noonBeige"
                : time >= 16 && time < 20
                ? "border-sunsetPurple"
                : time >= 20 || time < 6
                ? "border-nightPurple placeholder:text-gray-500"
                : time >= 6 && time < 12 && "border-morningPurple text-black"
            }`}
          />
          <textarea
            name="message"
            rows="11"
            placeholder="Your Message"
            required
            style={{ "font-family": "exo" }}
            className={`w-full p-[1.5rem] rounded-lg bg-transparent resize-none text-white border outline-none placeholder:text-xl placeholder:text-gray-800 ${
              time >= 12 && time < 16
                ? "border-noonBeige"
                : time >= 16 && time < 20
                ? "border-sunsetPurple"
                : time >= 20 || time < 6
                ? "border-nightPurple placeholder:text-gray-500"
                : time >= 6 && time < 12 && "border-morningPurple text-black"
            }`}
          ></textarea>
          <button
            type="submit"
            className={`w-52 h-14 border rounded-md mx-auto transition duration-300 ease ${
              time >= 12 && time < 16
                ? "hover:bg-noonBeige border-noonBeige text-gray-800"
                : time >= 16 && time < 20
                ? "hover:bg-sunsetPurple border-sunsetPurple text-gray-800"
                : time >= 20 || time < 6
                ? "hover:bg-nightBlue border-nightPurple text-nightLightBlue"
                : time >= 6 &&
                  time < 12 &&
                  "hover:bg-morningGray border-morningPurple text-morningPurple"
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
