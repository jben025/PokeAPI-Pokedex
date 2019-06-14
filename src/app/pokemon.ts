export class Pokemon {
    count: number;
    next: string;
    results: Array;
    constructor (
        count: number,
        next: string,
        results: Array
    ) {
        this.count = count;
        this.next = next;
        this.results = results
    }
}

export class Array {
    name: string;
    url: string;

    constructor (
        name: string,
        url: string
    ) {
        this.name = name;
        this.url = url;

    }
}

export class PokemonDetails{
    name: string;
    id: number;
    sprites: Sprites

}

export class Sprites {
    front_default: string;
    constructor(
        front_default: string
    ) {
        this.front_default = front_default;
    }
}