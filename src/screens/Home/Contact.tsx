import {FaFacebookSquare, FaLinkedin, FaPhoneSquareAlt} from "react-icons/fa";
import {BiLogoInstagramAlt} from "react-icons/bi";
import {MdEmail} from "react-icons/md";
import {useState} from "react";
import emailjs from '@emailjs/browser';
import {message} from "antd";


const Contact = () => {
    const [sendEmailDto, setSendEmailDto] = useState({
        name: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setSendEmailDto({...sendEmailDto, [name]: value});
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const templateParams = {
            from_name: sendEmailDto.name + ' ' + sendEmailDto.lastName,
            from_email: sendEmailDto.email,
            to_name: 'Mendrit',
            message: sendEmailDto.message,
        };

        emailjs.send(process.env.REACT_APP_SERVICE_ID as string, process.env.REACT_APP_TEMPLATE_ID as string, templateParams, process.env.REACT_APP_PUBLIC_KEY as string)
            .then((response) => {
                message.success('Email sent successfully!');
                setSendEmailDto({
                    name: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            })
            .catch((error) => {
                message.error('Email could not be sent');
            });
    };

    return (
        <div className='pt-8'>
            <div className='flex gap-8 items-center py-10'>
                <h1 className='text-3xl text-secondary'>Contact me</h1>
                <div className='w-60 h-[1px] bg-tertiary'></div>
            </div>
            <div className='flex gap-20 sm:flex-wrap sm:gap-10 sm:flex-col-reverse'>
                <div className='flex flex-col'>
                    <p className='text-white text-2xl sm:hidden'>Have an exciting project you need help with? Fill the
                        form or
                        contact me via instant message!</p>
                    <a href="mailto:mendritmorina4@gmail.com"
                       className='flex items-center text-white hover:text-tertiary hover:text-2xl hover:font-semibold mt-12 sm:mt-1'><MdEmail
                        className="mr-2"/>
                        mendritmorina4@gmail.com
                    </a>
                    <p className='flex items-center text-white hover:text-tertiary hover:text-2xl hover:font-semibold mt-2'>
                        <FaPhoneSquareAlt className="mr-2"/>
                        Phone: +383 43 556 183
                    </p>
                    <a href="https://www.linkedin.com/in/mendrit-morina-9aa946215"
                       className='flex items-center text-white hover:text-tertiary hover:text-2xl hover:font-semibold mt-2'
                       target="_blank">
                        <FaLinkedin className="mr-2"/>
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/mendritmorina_"
                       className='flex items-center text-white hover:text-tertiary hover:text-2xl hover:font-semibold mt-2'
                       target="_blank">
                        <BiLogoInstagramAlt className="mr-2"/>
                        Instagram
                    </a>
                    <a href="https://www.facebook.com/Mendriti10"
                       className='flex items-center text-white hover:text-tertiary hover:text-2xl hover:font-semibold mt-2 sm:mb-5'
                       target="_blank">
                        <FaFacebookSquare className="mr-2"/>
                        Facebook
                    </a>
                </div>
                <div className="w-1/2 sm:w-full">
                    <p className='text-white text-2xl hidden sm:inline-block sm:mb-5'>Have an exciting project you need
                        help
                        with? Fill the form or contact me via instant message!</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Name"
                                required
                                aria-label="Name"
                                value={sendEmailDto.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mt-5 text-sm font-medium text-white">Last
                                name</label>
                            <input
                                type="text"
                                id="last_name"
                                name="lastName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Last name"
                                required
                                aria-label="Last Name"
                                value={sendEmailDto.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mt-5 text-sm font-medium text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email"
                                required
                                aria-label="Email"
                                value={sendEmailDto.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message"
                                   className="block mt-5 text-sm font-medium text-white">Message</label>
                            <textarea id="message" name="message" rows={4} required value={sendEmailDto.message}
                                      onChange={handleChange}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Your message..."></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="mt-3 mb-12 border-2 border-white text-white px-5 py-1 rounded hover:bg-tertiary hover:text-white hover:border-white sm:mb-5"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
