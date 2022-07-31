import React from 'react'

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    phone: ''
})

const onSubmit = (e)=>{
    try {
        e.preventDefault()
        console.log(formValues)
    } catch (err) {
        
    }
}

return (
<div className="card mb-3">
  <div className="card-header">Add Contact</div>
  <div className="card-body">
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control form-control-lg"
          placeholder="Enter Name...."
          value={formValues.name}
          onChange={(e)=>setFormValues(state=>({...state, name: e.target.value}))}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="form-control form-control-lg"
          placeholder="Enter Email...."
          value={formValues.email}
          onChange={(e)=>setFormValues(state=>({...state, email: e.target.value}))}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          className="form-control form-control-lg"
          placeholder="Enter Phone...."
          value={formValues.phone}
          onChange={(e)=>setFormValues(state=>({...state, phone: e.target.value}))}
        />
      </div>
      <button className="btn btn-light btn-block" type="submit">
        Add Contact
      </button>
    </form>
  </div>
</div>
);
}
function useState(arg0: { email: string; name: string; phone: string }): [any, any] {
  throw new Error('Function not implemented.')
}