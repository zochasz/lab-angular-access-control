export class AccessLog {
    constructor(
      public person: string,
      public message: string,
      public createdAt: Date = new Date()
    ) {}
}
