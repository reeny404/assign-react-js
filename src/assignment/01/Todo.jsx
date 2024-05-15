class Todo {
  constructor(title, desc, isDone = false) {
    this.id = Math.random();
    this.title = title;
    this.desc = desc;
    this.isDone = isDone;
  }
}

export { Todo };
