import { ApiProperty } from "@nestjs/swagger";
import { DayOfWeek } from "src/database/interfaces/employee-weekly-orders.interface";

export class EmployeeWeeklyOrderResponse {
    @ApiProperty({
        description: 'ID do funcionário',
        type: Number,
        example: 1,
    })
    employeeId: number;

    @ApiProperty({
        description: 'Dia da semana',
        type: String,
        example: 'Monday',
    })
    dayOfWeek: DayOfWeek;

    @ApiProperty({
        description: 'ID do pedido individual',
        type: Number,
        example: 1,
    })
    individualOrderId: number;

    createdAt?: Date;
    updatedAt?: Date;
  } 