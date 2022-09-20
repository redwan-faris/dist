import { Captin } from 'src/captin/entities/captin.entity';
export declare class Car {
    id: number;
    model: string;
    number: string;
    color: string;
    is_active: boolean;
    type: string;
    picture: string;
    captin: Captin;
    created_at: Date;
    updated_at: Date;
}
