import { ApiProperty } from "@nestjs/swagger";
import { DayOfWeek } from "src/database/interfaces/employee-weekly-orders.interface";
import { OrderItemEntityInterface } from "src/database/interfaces/order-item.interface";
import { CreateOrderItemDto } from "./createOrderItemDto";

export class CreateEmployeeWeeklyOrderDto {
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
        description: 'Itens do pedido',
        type: [CreateOrderItemDto],
    })
    order: OrderItemEntityInterface[];

  }