export abstract class CommonModel {
    constructor(
        public id: number = 0,
        public uuid: string = "",
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date(),
        public createdHow: number | null = null,
        public updatedHow: number | null = null
    ) {   }
}