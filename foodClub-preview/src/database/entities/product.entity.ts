import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ProductEntityInterface } from "./product.interface";

@Table({
    tableName: 'product',
    timestamps: false,
})
export class ProductEntity extends Model implements ProductEntityInterface {
    @PrimaryKey
    @AutoIncrement
    @Column({
        primaryKey: true,
        allowNull: false,
        type: DataType.INTEGER,
    })
    id: number;

    @Column({
        allowNull: false,
        type: DataType.STRING(100),
    })
    name: string;

    @Column({
        allowNull: false,
        type: DataType.FLOAT(14, 2),
    })
    value: number;
    
    @Column({
        allowNull: false,
        type: DataType.STRING(500),
    })
    description: string;
    
    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    brandId: number;
}