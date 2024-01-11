import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Map from "./Map";
const Contact = () => {
  //states
  const [success, setSuccess] = useState<boolean | null>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const ref = useRef<HTMLFormElement>(null);

  //function
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current) {
      emailjs
        .sendForm(
          "service_03g3xwc",
          "template_j0wyifq",
          ref.current,
          "FoowVW1r-oMYfCUCf"
        )
        .then(
          (result) => {
            setSuccess(true);
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="pl-12 h-screen snap-center grid grid-cols-3">
      {/*left side */}
      <div className="flex items-center justify-end col-span-1">
        <form
          ref={ref}
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-96"
        >
          <h3 className="text-white text-3xl">Contact Us</h3>
          <input
            onChange={handleInputChange}
            value={formData.name}
            type="text"
            placeholder="Name"
            name="name"
            className="p-4 rounded-md"
          />
          <input
            onChange={handleInputChange}
            value={formData.email}
            type="text"
            placeholder="Email"
            name="email"
            className="p-4 rounded-md"
          />

          <textarea
            onChange={handleInputChange}
            value={formData.message}
            name="message"
            placeholder="Write your message "
            className="h-60 rounded-md p-4"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white rounded-md py-2"
          >
            send
          </button>
          {success && (
            <span className="text-white">
              your message has been sent.we'll get back to you soon
            </span>
          )}
        </form>
      </div>
      {/*right side */}
      <div className="col-span-2">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
