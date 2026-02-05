export interface SailingWeek {
    id: string; // e.g., "2026-03-01"
    startDate: string; // ISO date
    name?: string; // e.g., "Spring Break Cruise"
}

export interface Ship {
    id: string; // e.g., "icon-of-the-seas"
    name: string;
    lineId: string;
    sailingWeeks: SailingWeek[];
}

export interface CruiseLine {
    id: string; // e.g., "royal-caribbean"
    name: string;
    logo?: string;
    ships: Ship[];
}
