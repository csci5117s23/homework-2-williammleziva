import Toggle from '@/components/doneToggle'


export default function TodoItem({data}){

    return(
        <div>
            {data.map((todo) => ( 
                <div class="block max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {todo.item}
                    </h5>
                    <Toggle done={todo.done} tId={todo._id} />
                    <p class="font-large text-gray-400">
                        {todo.category}
                    </p>
                    <p class="font-small text-gray-400">
                        {todo.content}
                    </p>
                </div>
            ))}
        </div>
    )}