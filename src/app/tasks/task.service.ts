import { Injectable } from '@angular/core';
import { type NewTask } from './new-task/newTask.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Design UI components',
      summary: 'Create reusable UI components using Tailwind CSS',
      dueDate: '2024-07-10',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Write unit tests',
      summary: 'Implement unit tests for core application features',
      dueDate: '2024-08-01',
    },
    {
      id: 't6',
      userId: 'u4',
      title: 'Optimize database queries',
      summary: 'Improve the performance of database queries in the backend',
      dueDate: '2024-09-20',
    },
    {
      id: 't7',
      userId: 'u5',
      title: 'Develop mobile app',
      summary: 'Start the development of a mobile application version',
      dueDate: '2024-10-05',
    },
    {
      id: 't8',
      userId: 'u5',
      title: 'Set up CI/CD pipeline',
      summary: 'Automate build, test, and deployment processes',
      dueDate: '2024-11-15',
    },
    {
      id: 't9',
      userId: 'u6',
      title: 'Conduct security audit',
      summary: 'Perform a security audit on the application',
      dueDate: '2025-01-20',
    },
    {
      id: 't10',
      userId: 'u6',
      title: 'Document API endpoints',
      summary: 'Write clear documentation for all API endpoints',
      dueDate: '2025-02-28',
    },
  ];

  
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    console.log('getUserTasks');
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }
  
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
