import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name: string | undefined;
  @Input({ required: true }) userId!: string;

  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    console.log('get selectedUserTasks');
    return this.taskService.getUserTasks(this.userId);
  }

  onTaskComplete(taskId: string) {
    // this.tasks = this.tasks.filter((task) => task.id !== taskId);
    return this.taskService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancleAddTask() {
    this.isAddingTask = false;
  }
}
