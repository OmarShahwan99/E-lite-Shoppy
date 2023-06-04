const ConactForm = () => {
  return (
    <div className="px-10 py-16 bg-dark">
      <h2 className="text-3xl uppercase font-light tracking-widest text-light mb-8">
        <span className="font-bold">Contact</span> Form
      </h2>
      <form>
        <div className="mb-6">
          <label htmlFor="name" className="block text-para focus:text-primary">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border-b-2 border-light bg-transparent transition focus:border-primary w-full focus:outline-none duration-300 text-light p-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-para focus:text-primary">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-b-2 border-light bg-transparent focus:border-primary w-full focus:outline-none transition duration-300 text-light p-2"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-para focus:text-primary"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="border-b-2 border-light bg-transparent focus:border-primary w-full focus:outline-none transition duration-300 text-light p-2"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-para focus:text-primary"
          >
            Message
          </label>
          <textarea
            type="text"
            id="message"
            className="border-b-2 border-light bg-transparent focus:border-primary focus:outline-none w-full min-h-10 transition duration-300 text-light p-2"
          ></textarea>
        </div>
        <div>
          <button className="uppercase text-light px-10 py-3 bg-primary font-bold">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConactForm;
