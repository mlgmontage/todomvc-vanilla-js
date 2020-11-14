const todosElm = document.querySelector("#todos");
const todoForm = document.querySelector("form");
const addTodo = document.querySelector("#addTodo");

const todos = [
  { name: "Write some code", isCompleted: false },
  { name: "Play chess", isCompleted: false },
  { name: "Clean room", isCompleted: true },
  { name: "Listen to music", isCompleted: true },
];

const update = () => {
  let view = "";

  for (let i = 0; i < todos.length; i++) {
    const isCompletedClass = todos[i].isCompleted
      ? "text-decoration-line-through"
      : "";

    const isCompletedAttr = todos[i].isCompleted ? "checked" : "";

    view += `
      <div class="list-group-item ${isCompletedClass} ">

        <div class="form-check">

          <input class="form-check-input" type="checkbox" ${isCompletedAttr} name="${i}" id="id${i}">

          <label class="form-check-label ${isCompletedClass}" for="id${i}">
            ${todos[i].name}
          </label>

        </div>

      </div> 
    `;
  }

  // Binding Event to each element
  todosElm.innerHTML = view;
  for (let i = 0; i < todos.length; i++) {
    const todoElm = document.querySelector(`#id${i}`);

    todoElm.addEventListener("click", (e) => {
      const todoId = Number(e.target.name);

      todos[todoId].isCompleted = !todos[todoId].isCompleted;
      update();
    });
  }
};

update();

// Adding todo

addTodo.addEventListener("click", (e) => {
  e.preventDefault();

  const form = new FormData(todoForm);
  const todoText = form.get("todoText");

  todos.unshift({
    name: todoText,
    isCompleted: false,
  });

  update();
});
