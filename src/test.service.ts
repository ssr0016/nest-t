import { TestRepository } from './test.repository';
export class TestService {
  private TestRepository: TestRepository = new TestRepository();
  add() {
    return this.TestRepository.getNumberInDB() + 1;
  }
}
