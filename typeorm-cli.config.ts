import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1654506748217 } from 'src/migrations/1654506748217-CoffeeRefactor';
import { SchemaSync1654507460224 } from 'src/migrations/1654507460224-SchemaSync';
import { DataSource } from 'typeorm';
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1654506748217, SchemaSync1654507460224],
});
