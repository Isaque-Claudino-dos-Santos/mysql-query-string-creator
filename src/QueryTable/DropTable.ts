export default class DropTable {
  constructor(private readonly table: string) {}

  end(): string {
    return `drop table ${this.table}`
  }
}
