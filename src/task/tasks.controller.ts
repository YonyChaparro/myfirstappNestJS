import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})

export class TasksController {
    tasksService: TasksService

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }


    @Get('/tasks')
    getAllTasks() {

        //Antes de devolver algo puedo o haer la petición puedo:
        //buscar en una base de datos; peticion a otro backend o API

        return this.tasksService.getTasks();
    }
}