import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { dishRatingProvider } from "src/database/providers/dish-rating.provider";
import { DishRatingControlller } from "./dish-rating.controller";
import { UpdateDishRatingService } from "./services/update-dish-rating.service";
import { DeleteDishRatingService } from "./services/delete-dish-rating.service";
import { CreateDishRatingService } from "./services/create-dish-rating.service";
import { GetByDishAndUserService } from "./services/get-bydish-and-user.service";
import { GetListByDishService } from "./services/list-bydish.service";

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