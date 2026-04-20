export declare enum EventType {
    HOLIDAY = "holiday",
    EXAM = "exam",
    EVENT = "event"
}
export declare class Event {
    id: string;
    title: string;
    description: string;
    date: string;
    type: EventType;
}
