import {Fragment} from "react";
import Link from "next/link";

export default function Navigation() {
    return (
        <Fragment>
            <ul className="flex bg-red-300">
                <li className="mr-6 px-4 my-5 font-bold hover:text-white">
                    <Link href="/">Home</Link>
                </li>
                <li className="mr-6 px-4 my-5 font-bold hover:text-white">
                    <Link href="/article-page">Article Page</Link>
                </li>
            </ul>
        </Fragment>
    )
}