import React from 'react'

function About() {
  return (
   <>
   <div className=" bg-rose-400 min-h-screen bg-gray-100 flex items-center justify-center p-6">
<div className="max-w-3xl bg-white shadow-xl rounded-2xl p-8 text-center">
<h1 className="text-4xl font-bold mb-4">About Us</h1>
<p className="text-lg leading-relaxed mb-4">
Welcome to our website! We are dedicated to providing the best services
and solutions to help you grow and achieve success. Our team focuses on
quality, innovation, and user-friendly experiences.
</p>
<p className="text-lg leading-relaxed mb-4">
Our mission is to deliver value through technology and creativity.
Whether you're exploring ideas or building something new, we are here to
support you every step of the way.
</p>
<button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
Learn More
</button>
</div>
</div>
   </>
  )
}

export default About