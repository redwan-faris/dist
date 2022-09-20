import { Captin } from "src/captin/entities/captin.entity";
import { Student } from "src/student/entities/student.entity";
import { Repository } from "typeorm";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { UpdateRatingDto } from "./dto/update-rating.dto";
import { Rating } from "./entities/rating.entity";
export declare class RatingRepository {
    private readonly rateRepository;
    constructor(rateRepository: Repository<Rating>);
    createRating(createRatingDto: CreateRatingDto, student: Student, captin: Captin): Promise<Rating>;
    findOneRating(id: number): Promise<Rating>;
    findAllRatings(): Promise<Rating[]>;
    updateRating(id: number, updateRatingDto: UpdateRatingDto): Promise<Rating>;
    removeRating(id: number): Promise<void>;
}
