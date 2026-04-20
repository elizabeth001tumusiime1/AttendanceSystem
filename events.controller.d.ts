import { EventsService } from './events.service';
import { Event } from '../../entities/event.entity';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    findAll(): Promise<Event[]>;
    create(eventData: Partial<Event>): Promise<Event>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
