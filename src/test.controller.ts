import { Controller, Get } from '@nestjs/common';

@Controller()
export class TestController {
  @Get('products')
  findAllProducts() {
    return 'List of Products';
  }
}
