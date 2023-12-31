import React from "react";
import Container from "../ui/Container";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = () => {
    emailjs
      .send(
        "service_yqxhg2f",
        "template_k5xgssn",
        { email: "hello", subject: "hello" },
        "9Nv59pq5QgveZTB6w"
      )
      .then(
        (result) => {
          reset();
          console.log(result);
          Swal.fire("Perfect!", "Your message has been submitted!", "success");
        }

        // (error) => {
        //   console.log(error.text);
        // }
      )
      .catch((err) => {
        console.log("err", err);
        reset();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something Went wrong",
        });
      });
  };
  return (
    <section id="contact" className="pb-16 md:pb-24 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-full xl:w-[42%] bg-gray-50" />
      </div>
      <Container>
        <div className="relative lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Contact us
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Interested in product updates, cloud news and tips?
              </p>
              <p className="mt-4 text-base text-gray-500">
                Join over 5,000 cloud professionals and sign up for our free
                newsletter (it takes less than 10 seconds).
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">support@example.com</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-base text-gray-500">
                By subscribing, you're agreeing that Hyperglance will email you
                news, tips, updates, and offers. You can unsubscribe at any
                time.
              </p>
            </div>
          </div>
          <div className="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12 mt-0 lg:mt-8 xl:mt-0">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form
                onSubmit={handleSubmit(sendEmail)}
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Full name"
                    {...register("from_name", { required: true })}
                  />
                  {errors.from_name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Email"
                    {...register("from_email", { required: true })}
                  />
                  {errors.from_email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Phone"
                    {...register("from_phone", { required: true })}
                  />
                  {errors.from_phone && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Message"
                    defaultValue={""}
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
