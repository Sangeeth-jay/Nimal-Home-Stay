import React from "react";
import { BsInstagram, BsFacebook, BsTwitterX } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    const handleEmail = () => {
        const email = 'nimalsembakuttige@hotmail.com';
        const subject = 'Hello Nimal';
        const mailToLink = `mailto:${email}?subject=${subject}`;
        window.location.href = mailToLink;
    }

    const copyText = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        alert("Text copied to clipboard");

    }

    return (
        <>
            <section id="contact">
                <div data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="text-lg font-istok text-title text-center p-4">I will be very happy to give you a lovely experience. See you soon at Nimal's Homestay!</h1>
                </div>
                <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-center lg: gap-4 items-center h-fit p-2" data-aos="fade-up" data-aos-duration="2000">
                    <div className="lg:w-2/4 lg:h-96 md:w-3/4 w-full h-60">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15868.808027696376!2d80.1285099!3d6.1034774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1764cd0af5151%3A0xd1a681ebd966b418!2sNimal&#39;s%20Homestay!5e0!3m2!1sen!2slk!4v1711700381197!5m2!1sen!2slk"
                            width="600"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="map"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <div className="lg:w-auto lg:h-96 lg:flex md:w-auto flex-col justify-center w-full">
                        <h1 className="text-3xl font-bold font-istok text-title text-left p-1">Contact Us</h1>
                        <h2 className="lg:text-lg text-sm pl-2 font-semibold text-common pb-1 cursor-pointer transform hover:text-yellow-400 duration-300 ease-in-out" onClick={() => copyText('+94 77 113 6997')}>+94 77 113 6997</h2>
                        <h2 className="lg:text-lg text-sm pl-2 font-semibold text-common pb-1 cursor-pointer transform hover:text-yellow-400 duration-300 ease-in-out" onClick={() => copyText('Dammissara Mawatha, 80250 Hikkaduwa, Sri Lanka')}>
                            Dammissara Mawatha,
                            <br /> 80250 Hikkaduwa, Sri Lanka
                        </h2>
                        <h2 className="lg:text-lg text-sm pl-2 font-semibold text-common pb-1 cursor-pointer transform hover:text-yellow-400 duration-300 ease-in-out" onClick={handleEmail}>nimalsembakuttige@hotmail.com</h2>
                        <div className="flex flex-row gap-4 pt-4 pb-4 pl-2">
                            <BsInstagram size={25}
                                className="cursor-pointer text-[#3f3d56] transform hover:text-yellow-500 duration-300 ease-in-out"
                                onClick={() => window.open("https://www.instagram.com/nimal.homestay/", "_blank")} />
                            <BsFacebook size={25}
                                className="cursor-pointer text-[#3f3d56] transform hover:text-yellow-500 duration-300 ease-in-out"
                                onClick={() => window.open("https://web.facebook.com/NimalHomeStay", "_blank")} />
                            <BsTwitterX size={25}
                                className="cursor-pointer text-[#3f3d56] transform hover:text-yellow-500 duration-300 ease-in-out"
                                onClick={() => window.open("https://twitter.com/intent/post?related=wordpressdotcom&text=Nimal&url=https%3A%2F%2Fnimalhomestay.wordpress.com%2Fnimal%2F", "_blank")} />
                        </div>
                    </div>

                </div>

                <div className="w-full flex justify-center lg:mt-10 mt-2 lg:pb-2 pb-1">
                    <p className="text-xs font-sans text-common">Designed & Developed by <a href="https://sangeeth-jay.vercel.app/" className="font-semibold"> Sangeeth Jay</a></p>
                </div>
            </section>
        </>

    );
};

AOS.init();

export default Contact;
