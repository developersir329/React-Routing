import React from 'react'
import Image from '../assets/Image.jpg'
import manjeet	from '../assets/manjeet.jpg'
import vishal from '../assets/vishal.jpg'
function Team() {
  return (
   <section className="py-6 bg-blue-200 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
		<p className="max-w-2xl text-center dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="img"className="object-cover object-top self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={vishal}/>
				<p className="text-xl font-semibold leading-tight">Vishal Tiwari</p>
				<p className="dark:text-gray-600">Full Stack Developer </p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className=" object-cover object-center self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={manjeet} />
				<p className="text-xl font-semibold leading-tight">Manjeet Sharma</p>
				<p className="dark:text-gray-600">Full Stack Developer</p>
			</div>
		</div>
	</div>
</section>
  )
}

export default Team