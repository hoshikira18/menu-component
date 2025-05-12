import type { Coords, ElementRects, Placement, Side } from "./types";

export function getSide(placement: Placement): Side {
    return placement.split('-')[0] as Side;
}

export const calculateCoordsFromPlacement = ({ reference, floating }: ElementRects, placement: Placement, offset: number) => {
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    let side = getSide(placement);

    let coords: Coords;
    switch (side) {
        case 'top':
            coords = { x: commonX, y: reference.y - floating.height - offset };
            break;
        case 'bottom':
            coords = { x: commonX, y: reference.y + reference.height + offset };
            break;
        case 'right':
            coords = { x: reference.x + reference.width + offset, y: commonY };
            break;
        case 'left':
            coords = { x: reference.x - floating.width - offset, y: commonY };
            break;
        default:
            coords = { x: reference.x, y: reference.y };
    }

    const maxX = window.innerWidth - floating.width;
    const maxY = window.innerHeight - floating.height;

    coords = {
        x: Math.min(
            Math.max(coords.x > 0 ? coords.x : offset + reference.width, 10),
            maxX
        ),
        y: Math.min(
            Math.max(coords.y > 0 ? coords.y : 0, 0),
            maxY
        ),
    };

    return coords;
}