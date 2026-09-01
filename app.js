document.getElementById('addBtn').addEventListener('click', function() {
    const input = document.getElementById('taskInput');
    const status = document.getElementById('statusInput').value;
    const text = input.value.trim();

    if (text === '') return;

    const ul = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${text} <span class="badge">${status}</span></span>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    ul.appendChild(li);
    input.value = '';
});
