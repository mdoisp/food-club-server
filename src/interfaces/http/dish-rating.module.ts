import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infrastructure/database/database.module";
import { dishRatingProvider } from "src/infrastructure/providers/dish-rating.provider";
import { DishRatingControlller } from "./controllers/dish-rating.controller";
import { UpdateDishRatingService } from "../../application/use-cases/update-dish-rating.use-cases";
import { DeleteDishRatingService } from "../../application/use-cases/delete-dish-rating.use-cases";
import { CreateDishRatingService } from "../../application/use-cases/create-dish-rating.use-cases";
import { GetByDishAndUserService } from "../../application/use-cases/get-bydish-and-user.use-cases";
import { GetListByDishService } from "../../application/use-cases/list-bydish.use-cases";

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