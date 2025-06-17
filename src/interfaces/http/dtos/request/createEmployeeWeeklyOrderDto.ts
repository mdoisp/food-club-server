import { ApiProperty } from "@nestjs/swagger";
import { DayOfWeek } from "src/domain/repositories/employee-weekly-orders.interface";
import { OrderItemEntityInterface } from "src/domain/repositories/order-item.interface";
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
        type: CreateOrderItemDto,
    })
    order: OrderItemEntityInterface;

  }