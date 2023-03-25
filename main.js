let taskName = document.querySelector("[type=\"text\"]");
let container = document.querySelector(".task-container");
let form = document.querySelector('form');
let value;
let tasksCount = 0;

form.onsubmit = (element) => {
    if (taskName.length !== "") {
        window.localStorage.setItem(taskName.value, taskName.value);
        tasksCount++;
    } else {
        element.preventDefault();
    }
};
// window.localStorage.clear();
console.log(window.localStorage.getItem("task1"));
window.localStorage.key(0);
if (window.localStorage.length !== 0) {
    for (let i = 0; i < window.localStorage.length; i++) {
        let task = document.createElement("div");
        task.className = "task";
        let p = document.createElement("p");
        let button = document.createElement("button");
        button.className = `${window.localStorage.key(i)}`;
        let text = document.createTextNode("Delete");
        let text1 = document.createTextNode(window.localStorage.key(i));
        button.appendChild(text);
        p.appendChild(text1);
        p.appendChild(button);
        task.appendChild(p);
        container.appendChild(task);
    }
}

let btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        window.localStorage.removeItem(`${button.className}`);
        window.location.reload();
    })
});


