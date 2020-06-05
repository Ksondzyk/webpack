import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList } from "./tasksGateway.js";

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list-item__checkbox");

  if (!isCheckbox) return;

  const done = e.target.checked;
  const tasksList = getItem("tasksList");
  const taskId = e.target.dataset.id;
  const { text, createDate } = tasksList.find((task) => task.id === taskId);

  const updatedTask = {
    text,
    createDate,
    done,
    doneDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};
//1. prepare data
//2. update data in database
//3. read new data  from server
//4. save new data to front-end storage
//5. update based on new data
