const todosElm = document.querySelector("#todos");

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

          <input class="form-check-input" type="checkbox" ${isCompletedAttr} id="${i}">

          <label class="form-check-label ${isCompletedClass}" for="${i}">
            ${todos[i].name}
          </label>

        </div>

      </div> 
    `;
  }

  todosElm.innerHTML = view;
};

update();
