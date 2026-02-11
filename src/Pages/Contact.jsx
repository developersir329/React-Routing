import React from 'react'

function Contact() {
  return (
   <div className="min-h-screen bg-rose-400 flex items-center justify-center p-6">
<div className="max-w-3xl bg-white shadow-xl rounded-2xl p-10 w-full">
<h1 className="text-4xl font-extrabold text-center mb-6 tracking-tight">
Contact Us
</h1>


<p className="text-center text-gray-600 mb-8 text-lg">
Feel free to reach out for any questions, support, or collaboration.
</p>


<form className="grid gap-5">
<input
type="text"
placeholder="Your Name"
className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


<input
type="email"
placeholder="Your Email"
className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


<textarea
rows="5"
placeholder="Your Message"
className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>


<button
className="w-full py-3 bg-blue-600 text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 transition"
>
Send Message
</button>
</form>


<div className="text-center mt-8 text-gray-700">
<p>Email: er.manjeet8353@gmail.com</p>
<p>Phone: +91 86046 75181</p>
</div>
</div>
</div>
  )
}

export default Contact