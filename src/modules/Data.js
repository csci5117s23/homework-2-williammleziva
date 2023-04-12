const Backend_URL = process.env.COHO_API_URL;

export async function AddTodo(authToken, todoFields) {
    const resp = await fetch(`${Backend_URL}/todo`, {
        method: "POST", 
        headers: {  'Authorization': 'Bearer ' + authToken,
                    'Content-Type': "application/json" },
        body: JSON.stringify(todoFields)
    });
    return resp;
}

export async function getItemsById(authToken, Id) {
    const resp = await fetch(`${BASEURL}/todo/${Id}`, {
        method: "GET",
        headers: {'Authorization': 'Bearer ' + authToken}
    });
    return resp.json();
}