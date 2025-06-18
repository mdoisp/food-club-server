import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infrastructure/database/database.module";
import { dishRatingProvider } from "src/infrastructure/providers/dish-rating.provider";
import { DishRatingControlller } from "./controllers/dish-rating.controller";
import { UpdateDishRatingService } from "../../application/use-cases/update-dish-rating.service";
import { DeleteDishRatingService } from "../../application/use-cases/delete-dish-rating.service";
import { CreateDishRatingService } from "../../application/use-cases/create-dish-rating.service";
import { GetByDishAndUserService } from "../../application/use-cases/get-bydish-and-user.service";
import { GetListByDishService } from "../../application/use-cases/list-bydish.service";

@Module({
    imports: [DatabaseModule],
    controllers: [DishRatingControlller],
    providers: [
        ...dishRatingProvider,
        UpdateDishRatingService, 
        DeleteDishRatingService,
        GetListByDishService,
        CreateDishRatingService,
        GetByDishAndUserService,
    ],
    exports: [
        UpdateDishRatingService, 
        DeleteDishRatingService,
        GetListByDishService,
        CreateDishRatingService,
        GetByDishAndUserService,],
})

export class DishRatingModule {}