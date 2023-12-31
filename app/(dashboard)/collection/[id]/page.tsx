import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { capitalize } from "@/app/utils/capitalize";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";
import { Paragraph } from "@/app/components/texts/texts";

async function getWord(id: string) {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.from("words").select().eq("id", id).single();

	if (!data) {
		notFound();
	}

	return data;
}

type Props = {
	searchParams: Record<string, string> | null | undefined;
	areYouSureModal: boolean;
};

export default async function CollectionDetailsPage({
	params,
	searchParams,
}: {
	params: any;
	searchParams: Props;
}) {
	const word = await getWord(params.id);
	const showAreYouSureModal = searchParams?.areYouSureModal;

	return (
		<main>
			<div className="space-y-5">
				<div className="flex space-x-2">
					<Link href={`/collection/${params.id}?areYouSureModal=true`}>
						<FiTrash2 className="h-6 w-6"></FiTrash2>
					</Link>
					<p className="text-xl">{capitalize(word.word)}</p>
				</div>
				<div className="flex flex-col space-y-2">
					<div className="flex flex-col space-y-1">
						<span className="uppercase font-bold text-xs">Translation</span>
						<p>{capitalize(word.translation)}</p>
					</div>
					<div className="flex flex-col space-y-1">
						<span className="uppercase font-bold text-xs">Example</span>
						<Paragraph className="italic">{capitalize(word.context)}</Paragraph>
					</div>
				</div>
			</div>
		</main>
	);
}
