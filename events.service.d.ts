import { Repository } from 'typeorm';
import { Event } from '../../entities/event.entity';
export declare class EventsService {
    private eventsRepository;
    constructor(eventsRepository: Repository<Event>);
    findAll(): Promise<Event[]>;
    create(eventData: Partial<Event>): Promise<Event>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
