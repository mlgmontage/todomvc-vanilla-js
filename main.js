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

    view += `
      <div class="list-group-item ${isCompletedClass} ">${todos[i].name}</div> 
    `;
  }

  todosElm.innerHTML = view;
};

update();
