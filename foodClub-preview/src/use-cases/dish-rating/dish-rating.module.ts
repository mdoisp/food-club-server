import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { dishRatingProvider } from "src/database/providers/dish-rating.provider";
import { DishRatingControlller } from "./dish-rating.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [DishRatingControlller],
    providers: [...dishRatingProvider],
    exports: [],
})

export class DishRatingModule {}