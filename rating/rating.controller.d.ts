import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    create(createRatingDto: CreateRatingDto): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    findOne(id: string): Promise<Rating>;
    update(id: string, updateRatingDto: UpdateRatingDto): Promise<Rating>;
    remove(id: string): Promise<void>;
}
