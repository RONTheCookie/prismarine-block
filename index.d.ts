/* Declaration file wrriten by ronthecookie <ronthecookie0101@gmail.com>
 * These typings have yet to be extensively tested
 * Paintings and signs are not declared because they aren't actually implemented
 */
import { Vec3 } from "vec3";
// export  function prismarine_block(mcVersion: string): Block;

interface Biome {
    id: number;
    name: string;
    displayName: string;
    rainfall: number;
    temperature: number;
}
export default class Block {
    constructor(type: number, biomeId: number, metadata: number);
    static pickVersion(mcVersion: string)
    static fromStateId(stateId: number, biomeId: number): Block
    canHarvest(heldItemType: number): boolean;

    digTime(
        heldItemType: number | null,
        creative: boolean,
        inWater: boolean,
        notOnGround: boolean
    ): number;

    position: Vec3;
    type: number;
    name: string;
    displayName: string;
    metadata: number;
    light: number;
    skyLight: number;
    hardness: number;
    biome: Biome;
    diggable: boolean;
    boundingBox: "block" | "empty";
    material:
        | null
        | "rock"
        | "wood"
        | "plant"
        | "melon"
        | "leaves"
        | "dirt"
        | "web"
        | "wool";
    harvestTools: any;
    drops: number[];
}
