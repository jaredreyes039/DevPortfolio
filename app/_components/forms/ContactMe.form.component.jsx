'use client'
import { useState } from "react";

export default function ContactMeForm(props) {

	const { toast } = props;
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const [isLoading, setIsLoading] = useState(false)

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
		setIsLoading(true)
		const res = await fetch('https://jaydevdesignapi.azurewebsites.net/contact/submit', {
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
			setIsLoading(false)
			setFirstName("")
			setLastName("")
			setEmail("")
			setMessage("")
			toast.success("Contact form sent, expect a reply within 48-72 hours. Thank you for reaching out- talk to you soon!")
		}
		else {
			toast.error("Failed to submit form, please try again later.")
		}
	}

	if (isLoading) {
	}

	return (
		<>
			<div className="flex mobilesc:max-lg:flex-col w-full ultrawide:gap-12 justify-center items-center">
				<div className="ultrawide:w-1/3 w-1/3 xl:mr-6 lg:max-ultrawide:w-1/4 mobilesc:max-lg:w-full mobilesc:max-lg:mb-8">
					<h1 className="ultrawide:text-4xl ultrawide:mb-4 mobilesc:max-ultrawide:text-2xl text-green-300">Contact Me</h1>
					<h2 className="ultrawide:text-xl lg:max-ultrawide:text-lg text-white">Looking to bring your small-business to the next level? Maybe you have a hobby you're ready to turn into more than a passion? Whatever the reason, reach out to me and let's see how we can make your presence and experience on the internet that much better!</h2>
				</div>
				{!isLoading && <form className="w-fit mobilesc:max-md:w-full flex flex-col gap-4 " onSubmit={(e) => { handleSubmit(e) }}>
					<input className="w-96 mobilesc:max-md:w-full bg-black text-green-300 px-8 py-2 mb-2 border-2 border-green-300 rounded-lg" name="firstName" value={firstName} onChange={(e) => { handleChangeFirstName(e) }} placeholder="First Name" type="text" />
					<input className="mobilesc:max-md:w-full w-96 bg-black text-green-300 px-8 py-2 mb-2 border-2 border-green-300 rounded-lg" name="lastName" value={lastName} onChange={(e) => { handleChangeLastName(e) }} placeholder="Last Name" type="text" />
					<input className="mobilesc:max-md:w-full w-96 bg-black text-green-300 px-8 py-2 mb-2 border-2 border-green-300 rounded-lg" name="email" value={email} onChange={(e) => { handleChangeEmail(e) }} placeholder="Email Address" type="email" />
					<textarea className="mobilesc:max-md:w-full w-96 h-32 bg-black text-green-300 px-8 py-2 mb-4 border-2 border-green-300 rounded-lg" name="message" value={message} onChange={(e) => { handleChangeMessage(e) }} placeholder="How can I help you?" />
					<button className="w-2/3 px-4 py-2 rounded-full bg-white text-black text-bold ultrawide:text-2xl lg:max-ultrawide:text-md" type="submit">Submit</button>
				</form>}
				{isLoading && <div role="status">
					<svg aria-hidden="true" className="m-4 inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
						<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
					</svg>
					<span class="sr-only">Loading...</span>
				</div>}
			</div>
		</>
	)
}
