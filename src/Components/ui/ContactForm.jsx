import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaRocket } from "react-icons/fa";
import AlertModal from "./AlertModal";

function ContactForm() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [modal, setModal] = useState({ show: false, message: "", status: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_wcvv946",
        "template_8un774u",
        form.current,
        "vsKGC7S1F7SXpTjKm"
      )
      .then(() => {
        setModal({
          show: true,
          message: "Message sent successfully!",
          status: "success",
        });
        form.current.reset();
      })
      .catch(() => {
        setModal({
          show: true,
          message: "Failed to send message. Please try again.",
          status: "error",
        });
      })
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setModal((prev) => ({ ...prev, show: false })), 5000);
      });
  };

  return (
    <>
      <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4 text-purple-600">Send a Message</h3>
        <form ref={form} onSubmit={sendEmail} className="space-y-4 font-medium">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm dark:text-white font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                placeholder="John Doe"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm dark:text-white font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm dark:text-white font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Project Inquiry"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm dark:text-white font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition font-semibold flex gap-3 items-center"
          >
            {isSending ? (
              <span className="flex gap-1 items-center">
                <FaRocket className="animate-bounce" />
                Sending<span className="animate-pulse">...</span>
              </span>
            ) : (
              <>
                <FaRocket /> Send Message
              </>
            )}
          </button>
        </form>
      </div>

      <AlertModal
        show={modal.show}
        status={modal.status}
        message={modal.message}
        onClose={() => setModal((prev) => ({ ...prev, show: false }))}
      />
    </>
  );
}

export default ContactForm;
