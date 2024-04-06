"use client";
import { useRef } from "react";
import emailjs from "emailjs-com";
import footer from "../public/footer.jpg";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { BsDiscord } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_re9lj2n",
        "template_3sor6aq",
        form.current,
        "5so9nC1Pl1cHjpUke"
      )
      .then(alert("Your Message was Sent Successfully"));
    e.target.reset();
  };

  return (
    <footer className="w-full relative">
      <Image
        src={footer}
        fill
        objectFit="cover"
        className="absolute top-0 left-0 -z-10 brightness-50"
        alt="Footer Background"
      />
      <h1 className="text-6xl text-center py-12 underline underline-offset-[12px] decoration-1">
        Get in Touch
      </h1>
      <div className="flex w-full justify-between item-start gap-20 md:flex-col px-24 md:px-12">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-1 flex-col justify-center items-center gap-6"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            required
            className="bg-transparent placeholder:text-xl w-full h-10 pl-2 border border-white rounded-md"
          />
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            required
            className="bg-transparent placeholder:text-xl w-full h-10 pl-2 border border-white rounded-md"
          />
          <textarea
            placeholder="Your Message"
            cols="30"
            rows="14"
            name="message"
            required
            className="w-full bg-transparent resize-none pl-2 border border-white rounded-md placeholder:text-xl"
          ></textarea>
          <button className="border border-white px-4 py-2 rounded-md bg-transparent hover:text-black hover:bg-white hover:font-bold transition duration-300 ease">
            Submit
          </button>
        </form>
        <div className="flex flex-1 flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col justify-center items-center gap-2 border border-white rounded-md py-4">
            <CiMail size={30} />
            <span>Email</span>
            <p>philipjobran009@gmail.com</p>
            <a href="mailto:philipjobran009@gmail.com" target={"_blank"}>
              <button className="border border-white py-2 px-4 bg-transparent rounded-md hover:text-black hover:bg-white hover:font-bold transition duration-300 ease">
                Send a Message
              </button>
            </a>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2 border border-white rounded-md py-4">
            <BsDiscord size={30} />
            <span>Discord</span>
            <p>P.Jobran#5482</p>
            <a
              href="https://discordapp.com/users/[892862766354935828]"
              target={"_blank"}
            >
              <button className="border border-white py-2 px-4 bg-transparent rounded-md hover:text-black hover:bg-white hover:font-bold transition duration-300 ease">
                Send a Message
              </button>
            </a>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2 border border-white rounded-md py-4">
            <IoLogoWhatsapp size={30} />
            <span>WhatsApp</span>
            <p>+963964596819</p>
            <a
              href="https://api.whatsapp.com/send?phone+963964596819"
              target={"_blank"}
            >
              <button className="border border-white py-2 px-4 bg-transparent rounded-md hover:text-black hover:bg-white hover:font-bold transition duration-300 ease">
                Send a Message
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex px-24 py-8 justify-center items-center">
        <p>{new Date().getFullYear()}&copy; All Rights Recerved.</p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
