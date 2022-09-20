import { PricesService } from './prices.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { Price } from './entities/price.entity';
import { GetPriceByPolygonDto } from './dto/get-price-by-polygon.dto';
export declare class PricesController {
    private readonly pricesService;
    constructor(pricesService: PricesService);
    getPrice(getPriceByPolygonDto: GetPriceByPolygonDto): Promise<{
        price: number;
    }>;
    create(createPriceDto: CreatePriceDto): Promise<Price>;
    findAll(): Promise<Price[]>;
    findOne(id: string): Promise<Price>;
    update(id: string, updatePriceDto: UpdatePriceDto): Promise<Price>;
    remove(id: string): Promise<void>;
}
