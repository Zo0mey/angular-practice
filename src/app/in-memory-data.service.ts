import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, title: "Task #1", description: "I am a big description of the task blabla bla" },
      { id: 2, title: "Task #2", description: "Description #2" },
      { id: 3, title: "Task #3", description: "Description #3" },
      { id: 4, title: "Task #4", description: "Description #4" },
      { id: 5, title: "Task #5", description: "Description #5" }
    ];

    const inprogress = [
      { id: 6, title: "Task inprogress", description: "asdfljn aojsdfs asdf" }
    ];

    const review = [
      { id: 7, title: "Task review", description: "asdfljn aojsdfs asdf" }
    ];

    const done = [
      { id: 8, title: "Task done", description: "asdfljn aojsdfs asdf" }
    ];

    return { tasks, inprogress, review, done };
  }
}