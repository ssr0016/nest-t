import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller()
export class TestController {
  private testService: TestService = new TestService();

  @Get('products')
  findAllProducts() {
    return 'List of Products';
  }

  @Get('calc')
  calc() {
    return this.testService.add();
  }
}
