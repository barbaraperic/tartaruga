import Link from "next/link";
import { AuthUser } from "@supabase/supabase-js";
import { ButtonText } from "./texts/Texts";

export default function Navbar({ user }: { user: AuthUser | undefined }) {
	return (
		<nav className="flex justify-between px-20 py-2 items-center bg-black text-white">
			<Link href={"/"}>
				<h1 className="tracking-wide">tartaruga</h1>
			</Link>
			<div className="space-x-6 flex items-center text-lg ">
				{user && (
					<span className="underline hover:no-underline">
						hello, {user.email}
					</span>
				)}
				<Link className="hover:underline" href={"/words"}>
					<p>library</p>
				</Link>
				<button className="hover:underline">
					<ButtonText>log out</ButtonText>
				</button>
			</div>
		</nav>
	);
}
