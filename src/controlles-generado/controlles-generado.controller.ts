import { Controller, Get } from '@nestjs/common';

@Controller() //Si no dejamos nada, va al Home
export class ControllesGeneradoController {
    @Get('/')
    index() {
        return 'Home Pege'
    }
}
