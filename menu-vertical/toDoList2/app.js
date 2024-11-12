class Task {
    constructor(year, month, day, type, description) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.type = type;
        this.description = description;
    }

    validateData() {
        for (let key in this) {
            if (this[key] === undefined || this[key] === "") {
                console.error(`O campo ${key} é obrigatório`);
                return false;
            }
        }
        return true;
    }
}

class DataBase {
    constructor() {
        this.initDatabase();
    }

    initDatabase() {
        const id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', '0');
        }
    }

    loadTasks() {
        let tasks = [];
        let id = localStorage.getItem('id');

        for (let i = 1; i <= id; i++) {
            let task = JSON.parse(localStorage.getItem(i));
            if (task !== null) {
                tasks.push(task);
            }
        }
        return tasks;
    }

    createTask(task) {
        let id = this.getNextId();
        localStorage.setItem(id, JSON.stringify(task)); // Armazena a tarefa com o ID como chave
        localStorage.setItem('id', id.toString()); // Atualiza o ID no localStorage
    }

    getNextId() {
        let currentId = localStorage.getItem('id');
        return parseInt(currentId) + 1;
    }
}

const dataBase = new DataBase();

function registerTask() {
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let type = document.getElementById('type').value;
    let description = document.getElementById('description').value;

    let task = new Task(year, month, day, type, description);

    if (task.validateData()) {
        dataBase.createTask(task);
        alert('Tarefa criada com sucesso!');
        renderTasks(); // Recarrega as tarefas após a criação
    } else {
        alert('Preencha todos os campos');
    }
}

function renderTasks() {
    const taskList = document.getElementById('listTasks');
    taskList.innerHTML = ''; // Limpa a lista de tarefas antes de renderizar novamente

    const tasks = dataBase.loadTasks();
    tasks.forEach(task => {
        let row = document.createElement('tr');

        // Criação do HTML da linha com os dados da tarefa
        row.innerHTML = `
            <td>${task.day}/${task.month}/${task.year}</td>
            <td>${task.type}</td>
            <td>${task.description}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editTask(${task.day}, ${task.month}, ${task.year})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="removeTask(${task.day}, ${task.month}, ${task.year})">Excluir</button>
            </td>
        `;

        taskList.appendChild(row);
    });
}

// Função para editar uma tarefa
function editTask(day, month, year) {
    const tasks = dataBase.loadTasks();
    const task = tasks.find(t => t.day == day && t.month == month && t.year == year);
    
    // Preenche os campos de edição com os dados da tarefa
    document.getElementById('year').value = task.year;
    document.getElementById('month').value = task.month;
    document.getElementById('day').value = task.day;
    document.getElementById('type').value = task.type;
    document.getElementById('description').value = task.description;

    // Adiciona um botão para atualizar a tarefa
    const updateBtn = document.querySelector('button[type="button"]');
    updateBtn.onclick = function() {
        const updatedTask = new Task(
            document.getElementById('year').value,
            document.getElementById('month').value,
            document.getElementById('day').value,
            document.getElementById('type').value,
            document.getElementById('description').value
        );

        if (updatedTask.validateData()) {
            // Atualiza a tarefa no localStorage
            localStorage.setItem(`${day}${month}${year}`, JSON.stringify(updatedTask));
            renderTasks(); // Recarrega as tarefas
            alert('Tarefa atualizada com sucesso!');
        } else {
            alert('Preencha todos os campos');
        }
    };
}

// Função para remover uma tarefa
function removeTask(day, month, year) {
    // Remove a tarefa do localStorage
    localStorage.removeItem(`${day}${month}${year}`);
    renderTasks(); // Recarrega a lista de tarefas após remover
}

window.onload = function() {
    renderTasks(); // Renderiza as tarefas ao carregar a página
};
