import { Module } from '@nestjs/common';
import { TasksModule } from "./task/tasks.module";
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { ControllesGeneradoController } from './controlles-generado/controlles-generado.controller';

@Module({
  imports: [TasksModule, ProjectsModule, UsersModule],
  controllers: [ControllesGeneradoController],
})
export class AppModule {}
