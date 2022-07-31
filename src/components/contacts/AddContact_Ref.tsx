import React, { useRef } from "react";

export default function AddContact_Ref() {
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const phoneRef = useRef<HTMLInputElement>();

  const defaultProps = {
    name: "redd",
    email: "redd@bloxflip.com",
    phone: "10329832",
  };

  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();
      const finalObject = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      };
      console.log(finalObject);
    } catch (err) {}
  }
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                ref={nameRef}
                type="text"
                name="name"
                defaultValue={defaultProps.name}
                className="form-control form-control-lg"
                placeholder="Enter Name...."
              />
              
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                defaultValue={defaultProps.email}
                className="form-control form-control-lg"
                placeholder="Enter Email...."
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                ref={phoneRef}
                type="tel"
                name="phone"
                defaultValue={defaultProps.phone}
                className="form-control form-control-lg"
                placeholder="Enter Phone...."
              />
            </div>
            <button className="btn btn-light btn-block" type="submit">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    );
  };
