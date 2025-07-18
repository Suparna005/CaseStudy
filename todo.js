let completedCount = 0;

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(todos => {
        const list = document.getElementById('todoList');
        todos.slice(0, 20).forEach(todo => {
            const item = document.createElement('div');
            item.className = 'list-group-item d-flex align-items-center';

            item.innerHTML = `<input class="form-check-input me-2" type="checkbox" ${todo.completed ? 'checked disabled' : ''}><span>${todo.title}</span>`
            const checkbox = item.querySelector("input");

            if (!todo.completed) {
                checkbox.addEventListener("change", () => {
                    checkbox.checked ? completedCount++ : completedCount--;
                    checkFiveCompleted(completedCount).then(alert);
                });
            }

            list.appendChild(item);
        });
    });

function checkFiveCompleted(count) {
    return new Promise((resolve) => {
        if (count === 5) {
            resolve("🎉 Congrats. 5 Tasks have been Successfully Completed!");
        }
    });
}

document.getElementById("logoutBtn").addEventListener("click", () => {
    window.location.href = "index.html";
})