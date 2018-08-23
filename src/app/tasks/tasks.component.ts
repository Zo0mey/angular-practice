import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  showCreateDiv: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  addTask(title: string, description: string): void {
    title = title.trim();
    description = description.trim();
    if (!title) { return; }
    this.taskService.addTask({ title, description } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task).subscribe();
  }

  toggleCreateTaskDiv() :void {
    this.showCreateDiv = !this.showCreateDiv;
  }

}
