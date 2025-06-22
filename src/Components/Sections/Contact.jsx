// components/Contact.jsx
import ContactInfo from "../ui/ContactInfo";
import ContactForm from "../ui/ContactForm";

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-950 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 dark:text-white">
          Get in <span className="text-purple-600">Touch</span>
        </h2>
        <p className="text-center text-xl text-gray-700 dark:text-gray-300 mb-12 font-medium">
          I'm open to collaboration and freelance opportunities. <br />
          Let's work together and build something great!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
