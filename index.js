let listContainer = document.getElementById("listContainer");
let addTaskButton = document.getElementById("addTaskButton");
let taskModal = document.getElementById("taskModal");
let saveTaskButton = document.getElementById("saveTaskButton");
let closeModalButton = document.getElementById("closeModalButton");

const toggleModal = () => {
    taskModal.style.display = taskModal.style.display === "none" ? "block" : "none";
};

addTaskButton.onclick = toggleModal;
closeModalButton.onclick = toggleModal;

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

const showData = () => {
    listContainer.innerHTML = localStorage.getItem("data") || "";
    attachEventListeners();
};

saveTaskButton.onclick = () => {
    let taskName = document.getElementById("taskName").value;
    let taskDate = document.getElementById("taskDate").value;
    let taskDescription = document.getElementById("taskDescription").value;

    if (taskName && taskDate && taskDescription) {
        let li = document.createElement("li");
        li.innerHTML = `
            <div class="checkbox"><img class="boxes" src="./box.png" alt="Checkbox"></div>
            <div class="task-details">
                <h3>${taskName}</h3>
                <p>${taskDate}</p>
                <p>${taskDescription}</p>
            </div>
            <button class="delete-task"><img src="./delete.png"></button>`;
        listContainer.appendChild(li);

        document.getElementById("taskName").value = "";
        document.getElementById("taskDate").value = "";
        document.getElementById("taskDescription").value = "";
        toggleModal();

        saveData();
        attachEventListeners();
    } else {
        alert("Please fill out all fields!");
    }
};

const attachEventListeners = () => {
    let checkboxes = document.querySelectorAll(".boxes");
    checkboxes.forEach(element => {
        element.onclick = () => {
            element.src = element.src.includes("box.png") ? "./checkbox.jpeg" : "./box.png";
        };
    });

    let deleteButtons = document.querySelectorAll(".delete-task");
    deleteButtons.forEach(button => {
        button.onclick = (e) => {
            const li = e.target.closest('li');
            if (li) {
                li.remove();
                saveData();
            }
        };
    });
};

showData();