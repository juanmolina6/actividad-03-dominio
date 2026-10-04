export class Delivery {
    private courierId: string | null = null;

    constructor(
        public readonly id: string,
        public readonly address: string
    ) {}

    assignCourier(courierId: string): void {
        if (this.courierId !== null) {
            throw new Error("La entrega ya tiene un repartidor asignado");
        }

        this.courierId = courierId;
    }

    getCourierId(): string | null {
        return this.courierId;
    }
}