import { ApiProperty } from "@nestjs/swagger";
import { DayOfWeek } from "src/database/interfaces/employee-weekly-orders.interface";
import { OrderItemEntityInterface } from "src/database/interfaces/order-item.interface";

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

    // @ApiProperty({
    //     description: 'ID do pedido individual',
    //     type: Number,
    //     example: 1,
    // })
    // individualOrderId: number;

    createdAt?: Date;
    updatedAt?: Date;

    @ApiProperty({
        description: 'Informações do pedido (order)',
        type: Object,
        example: { id: 6, dishId: 1, quantity: 1 },
        required: false,
    })
    order?: OrderItemEntityInterface;
  } 