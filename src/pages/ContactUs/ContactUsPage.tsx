
const ContactUsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center mt-6">Contact Us</h1>
      <div className=" flex justify-center items-center gap-x-10 mt-10">
        <div className="flex flex-col gap-y-5">
          <div>
            <h2 className="text-xl font-semibold">Phone Number</h2>
            <p className="text-md">+20 10 273 753 18</p>
            <p className="text-md">+20 11 440 267 33</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Fax Number</h2>
            <p className="text-md">+1 234 567 891</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-md">moimenwy@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-end ">
          <div>
            <h2 className="text-md font-semibold">Head Office</h2>
            <p className="text-sm">123 Main St, Anytown, USA</p>
          </div>
          <div>
            <h2 className="text-md font-semibold">Branch 1</h2>
            <p className="text-sm">456 Elm St, Othertown, USA</p>
          </div>
          <div>
            <h2 className="text-md font-semibold">Branch 2</h2>
            <p className="text-sm">789 Pine St, Sometown, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
