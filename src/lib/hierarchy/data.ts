import { CruiseLine } from './types';

export const CRUISE_HIERARCHY: CruiseLine[] = [
    {
        id: 'royal-caribbean',
        name: 'Royal Caribbean',
        ships: [
            {
                id: 'icon-of-the-seas',
                name: 'Icon of the Seas',
                lineId: 'royal-caribbean',
                sailingWeeks: [
                    { id: '2026-03-01', startDate: '2026-03-01', name: 'March Madness' },
                    { id: '2026-03-08', startDate: '2026-03-08' },
                ]
            },
            {
                id: 'wonder-of-the-seas',
                name: 'Wonder of the Seas',
                lineId: 'royal-caribbean',
                sailingWeeks: [
                    { id: '2026-04-05', startDate: '2026-04-05' }
                ]
            }
        ]
    },
    {
        id: 'carnival',
        name: 'Carnival Cruise Line',
        ships: [
            {
                id: 'carnival-jubilee',
                name: 'Carnival Jubilee',
                lineId: 'carnival',
                sailingWeeks: [
                    { id: '2026-02-15', startDate: '2026-02-15', name: 'Valentine Voyage' }
                ]
            }
        ]
    }
];

export function getHierarchy() {
    return CRUISE_HIERARCHY;
}

export function getLine(lineId: string) {
    return CRUISE_HIERARCHY.find(l => l.id === lineId);
}

export function getShip(lineId: string, shipId: string) {
    const line = getLine(lineId);
    return line?.ships.find(s => s.id === shipId);
}

export function getSailing(lineId: string, shipId: string, sailingId: string) {
    const ship = getShip(lineId, shipId);
    return ship?.sailingWeeks.find(s => s.id === sailingId);
}
