import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Toggle from '@/components/doneToggle'
export default function TodoListComponent({title,data}){



return(
    <div class="w-full text-m font-medium text-gray-900 border rounded-lg bg-gray-700 border-gray-600 text-white">
        <a href="#" aria-current="true" class="block w-full text-lg px-4 py-2 text-white border-b  rounded-t-lg bg-gray-800 cursor-default border-gray-600">
            {title}
        </a>
        {data.map((todo) => (
            <div key={todo._id} className="block w-full px-4 py-2 border-b border-gray-200 cursor-default border-gray-600 focus:ring-gray-500 focus:text-white hover:bg-gray-600 hover:text-white">
                <span>{todo.item}</span>
                <Toggle done={todo.done} tId={todo._id}/>
                <Link href={`/todo/${todo._id}`} className="float-right mx-4 align-center text-lg">
                    <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#5b90ec" }} />
                </Link>
            </div>
        ))}
    </div>
)}
