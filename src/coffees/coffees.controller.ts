import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationQuerryDto } from 'src/common/dto/pagination-querry.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Coffee')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@ApiForbiddenResponse({ description: 'Forbidden.' })
  @Get()
  findAll(@Query() query: PaginationQuerryDto) {
    // const { limit } = query;
    //return `This action returns all coffee ${limit}`;
    return this.coffeesService.findAll(query);
  }
  @Get(':id')
  findbyId(@Param('id') id: 'string') {
    // return `This action returns all coffee by id ${id}`;
    return this.coffeesService.findbyId(id);
  }
  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() createCofffeeDto: CreateCoffeeDto) {
    // return body;
    return this.coffeesService.create(createCofffeeDto);
  }
  @Patch(':id')
  Update(@Param('id') id: 'string', @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // return `This updates coffee by id  ${id}`;
    return this.coffeesService.Update(id, updateCoffeeDto);
  }
  @Delete(':id')
  Remove(@Param('id') id: 'string') {
    //return `This removes`;
    return this.coffeesService.Remove(id);
  }
}
