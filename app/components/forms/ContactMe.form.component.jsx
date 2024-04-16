'use client'
import { useState } from "react";

export default function ContactMeForm(props) {

	const { toast } = props;
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const handleChangeFirstName = (e) => {
		setFirstName(e.target.value)
	}
	const handleChangeLastName = (e) => {
		setLastName(e.target.value)
	}
	const handleChangeEmail = (e) => {
		setEmail(e.target.value)
	}
	const handleChangeMessage = (e) => {
		setMessage(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch('https://jaydevdesignapi.azurewebsites.net/submit', {
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				message: message
			})
		})
		const status = res.status
		if (status === 200) {
			toast.success("Contact form sent, expect a reply within 48-72 hours. Thank you for reaching out- talk to you soon!")
		}
		else {
			toast.error("Failed to submit form, please try again later.")
		}
	}

	return (
		<>
			<div className="flex mobilesc:max-md:flex-col w-full ultrawide:gap-12 justify-center items-center">
				<div className="ultrawide:w-1/3 xl:w-1/2 xl:mr-6 md:max-ultrawide:w-1/4 mobilesc:max-md:w-full mobilesc:max-md:mb-4">
					<h1 className="ultrawide:text-4xl ultrawide:mb-4 mobilesc:max-ultrawide:text-2xl text-green-300">Contact Me</h1>
					<h2 className="ultrawide:text-xl lg:max-ultrawide:text-lg text-white">Looking to bring your small-business to the next level? Maybe you have a hobby you're ready to turn into more than a passion? Whatever the reason, reach out to me and let's see how we can make your presence and experience on the internet that much better!</h2>
				</div>
				<form className="w-fit mobilesc:max-md:w-full flex flex-col gap-4 " onSubmit={(e) => { handleSubmit(e) }}>
					<input className="w-96 mobilesc:max-md:w-full bg-black text-green-300 px-8 py-2 mb-2 border-2 border-green-300 rounded-lg" name="firstName" value={firstName} onChange={(e) => { handleChangeFirstName(e) }} placeholder="First Name" type="text" />
					<input className="mobilesc:max-md:w-full w-96 bg-black text-green-300 px-8 py-2 mb-2 border-2 border-green-300 rounded-lg" name="lastName" value={lastName} onChange={(e) => { handleChangeLastName(e) }} placeholder="Last Name" type="text" />
					<input className="mobilesc:max-md:w-full w-96 bg-black text-green-300 px-8 py-2 mb-2 border-2 border-green-300 rounded-lg" name="email" value={email} onChange={(e) => { handleChangeEmail(e) }} placeholder="Email Address" type="email" />
					<textarea className="mobilesc:max-md:w-full w-96 h-32 bg-black text-green-300 px-8 py-2 mb-4 border-2 border-green-300 rounded-lg" name="message" value={message} onChange={(e) => { handleChangeMessage(e) }} placeholder="How can I help you?" />
					<button className="w-2/3 px-4 py-2 rounded-full bg-white text-black text-bold ultrawide:text-2xl lg:max-ultrawide:text-md" type="submit">Submit</button>
				</form>
			</div>
		</>
	)
}
