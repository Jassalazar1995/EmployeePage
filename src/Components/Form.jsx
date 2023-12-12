import { useState } from "react"

export default function Form({addUser}) {
    let [form, setForm] = useState({
        first_name: "",
        title: "",
        phone: "",
        email: ""
    })

    function handleSubmit(e) {
        e.preventDefault();

        let employee = {
            ...form, 
            id: crypto.randomUUID()
        }
        console.log(employee);
        addUser(employee);
    }

    function handleChange(e) {
        setForm({...form, [e.target.id]: e.target.value})
    }

    


    return (
        <form onSubmit={handleSubmit} className="form-holder">
            <label htmlFor="first_name">Name: </label>
            <input id="first_name" value={form.name} onChange={handleChange}/>

            <label htmlFor="title">Title: </label>
            <input id="title" value={form.title} onChange={handleChange}/>

            <label htmlFor="phone">Phone: </label>
            <input id="phone" value={form.phone} onChange={handleChange}/>

            <label htmlFor="email">Email: </label>
            <input id="email" value={form.email} onChange={handleChange}/>
            <br />
            <button>Submit</button>
        </form>


    )
}