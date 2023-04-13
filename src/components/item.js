import Toggle from '@/components/doneToggle'


export default function TodoItem({data}){

    return(
        <div>
            {data.map((todo) => ( 
                <div id="todo._id" className="block w-full p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {todo.item}
                    </h5>
                    <Toggle todo={todo} />
                    <p class="font-large font-bold text-gray-400">
                        {todo.category}
                    </p>
                    <hr className='mr-80' max-mr></hr>
                    <p className="font-small text-gray-400">
                        {todo.content}
                    </p>
                </div>
            ))}
        </div>
    )}