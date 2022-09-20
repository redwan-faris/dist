import { GroupService } from 'src/group/group.service';
import { StudentService } from 'src/student/student.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';
import { RatingRepository } from './rating.repository';
export declare class RatingService {
    private readonly ratingRepository;
    private readonly studentService;
    private readonly groupService;
    constructor(ratingRepository: RatingRepository, studentService: StudentService, groupService: GroupService);
    create(createRatingDto: CreateRatingDto): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    findOne(id: number): Promise<Rating>;
    update(id: number, updateRatingDto: UpdateRatingDto): Promise<Rating>;
    remove(id: number): Promise<void>;
}
