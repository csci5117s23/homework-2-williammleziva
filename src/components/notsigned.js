import Link from "next/link";

export default function NotSigned(){

    return(
        <div>
            <div className="block w-full p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Sign in or create an account to continue
                </h5>     
                <br/>        
                <Link
                    href={"/sign-in"}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Sign In
                </Link>
            </div>
        </div>
    )}