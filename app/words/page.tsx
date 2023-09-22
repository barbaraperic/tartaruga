import CreateForm from "./CreateForm";
import WordsList from "./WordsList";

export default async function Words() {
	return (
		<main className="w-full">
			<h2>Words</h2>
			<div className="flex justify between">
				<WordsList />
				<div className="flex justify-center">
					<CreateForm />
				</div>
			</div>
		</main>
	);
}
