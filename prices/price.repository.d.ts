import { Department } from 'src/department/entities/department.entity';
import { PriceRegion } from 'src/price_region/entities/price_region.entity';
import { Repository } from 'typeorm';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { Price } from './entities/price.entity';
export declare class PriceRerpository extends Repository<Price> {
    createPrice(createPriceDto: CreatePriceDto, price_region: PriceRegion, department: Department): Promise<Price>;
    findAllPrices(): Promise<Price[]>;
    findPriceById(id: number): Promise<Price>;
    updatePrice(id: number, updatePriceDto: UpdatePriceDto): Promise<Price>;
    deletePrice(id: number): Promise<void>;
    findPriceByDaysAndDeparment(days: number, department: Department): Promise<Price[]>;
}
