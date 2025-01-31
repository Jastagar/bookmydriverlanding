export default function Contact() {
  return (
    <section className="bg-primary-800 py-20 w-full text-center flex flex-col text-white h-screen">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="text-lg">
        For any queries or feedback, reach out to us below:
      </p>

      <div className="mt-6 space-y-4 flex flex-col justify-center items-center grow text-black">
        <form className="shadow-md rounded-md flex flex-col items-center gap-4 p-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-96 py-2 px-4 rounded-lg bg-primary-200 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-96 py-2 px-4 rounded-lg bg-primary-200 focus:outline-none"
            rows={4}
          ></textarea>
          <button className="bg-primary-900 hover:bg-primary-1000 py-2 px-6 rounded-full text-white transition duration-100 transform">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
