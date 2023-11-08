import "./../style/style.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const NamaAwal = document.getElementById("FirstName").value;
    const NamaAkhir = document.getElementById("LastName").value;
    const Email = document.getElementById("email").value;
    const MessageText = document.getElementById("TextArea").value;

    const data = {
      firstname: NamaAwal,
      lastname: NamaAkhir,
      email: Email,
      message_text: MessageText,
    };
    console.log(data);
    let show =
      "First Name: " +
      data.firstname +
      "\nUmur: " +
      data.lastname +
      "\nEmail: " +
      data.email +
      "\nMessage: " +
      data.message_text;
    alert(show);
  };
  return (
    <>
      <div className="d-flex justify-content-center vh-100 align-items-center" id="contact">
        <div className="left d-flex align-items-center vh-100 bg-info">
          <div className="wrappers p-5 mx-auto ">
            <p className="title-text text-light fs-1 text-center fw-semibold">
              Thank You!
            </p>
            <p className="fs-5 w-75 mx-auto text-light text-center">
              Give your opinion about us for better service, We are so need your
              support to be a better future
            </p>
          </div>
        </div>
        <div className="right mx-auto">
          {/* Form */}
          <form action="GET" id="form" className="p-5 rounded bg-transparent" onSubmit={handleSubmit}>
            <p className="fs-1 text-center fw-bold text-info">Contact Us</p>
            {/* 2 column grid layout with text inputs for the first and last names */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form6Example1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form6Example2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form6Example5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
            {/* Message input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form6Example7">
                Additional information
              </label>
              <textarea
                className="form-control"
                id="TextArea"
                name="TextArea"
                rows={4}
                defaultValue={""}
              />
            </div>
            {/* Submit button */}
            <input
              type="submit"
              name="submit"
              id="submit"
              className="btn btn-primary btn-block w-100 bg-info border-0 mb-4"
              defaultValue="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
