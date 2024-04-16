import ContactMeForm from "../forms/ContactMe.form.component";
import SectionHeader from "./SectionHeader.component";


export default function ContactMeSection(props) {
	const { toast } = props
	return (
		<div className="px-24 mobilesc:max-md:px-6 py-12 ultrawide:w-2/3 lg:max-ultrawide:w-full mobilesc:max-md:w-full flex flex-col justify-center items-center">
			<SectionHeader
				title="Let's Get in Touch"
				numStr="04."
			/>
			<ContactMeForm toast={toast} />
		</div>
	)
}
