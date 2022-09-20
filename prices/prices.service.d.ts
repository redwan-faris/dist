import { DepartmentService } from 'src/department/department.service';
import { PriceRegionService } from 'src/price_region/price_region.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { GetPriceByPolygonDto } from './dto/get-price-by-polygon.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { Price } from './entities/price.entity';
import { PriceRerpository } from './price.repository';
export declare class PricesService {
    private readonly priceRepository;
    private readonly deparmentService;
    private readonly priceRegionService;
    constructor(priceRepository: PriceRerpository, deparmentService: DepartmentService, priceRegionService: PriceRegionService);
    create(createPriceDto: CreatePriceDto): Promise<Price>;
    findAll(): Promise<Price[]>;
    findOne(id: number): Promise<Price>;
    update(id: number, updatePriceDto: UpdatePriceDto): Promise<Price>;
    remove(id: number): Promise<void>;
    getPriceByPolygon(getPriceByPolygonDto: GetPriceByPolygonDto): Promise<{
        price: number;
    }>;
}
