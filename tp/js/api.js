export async function fetchData() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    displayData(data); 
    } catch (error) {
    console.error('Error al obtener datos:', error);
    }
}

function displayData(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = users.map(user => `<li>${user.name} (${user.email})</li>`).join('');
}

