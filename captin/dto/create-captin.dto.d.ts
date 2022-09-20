import { CreateCarDto } from 'src/car/dto/create-car.dto';
import { PolygonType } from 'src/region/types/polygon';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare class CreateCaptinDto {
    captionTypeId: number;
    driving_license: boolean;
    is_captin: boolean;
    regionId: number;
    polygon: PolygonType;
    car: CreateCarDto;
    user: CreateUserDto;
}
