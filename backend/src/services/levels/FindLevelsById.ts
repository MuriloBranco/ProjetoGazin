import { ILevelRepository } from "../../repositories/ILevelRepository";
import { Levels } from "../../models/levels";

interface IRequest {
    id: number;
}



class FindLevelById {
  constructor(private levelRepository: ILevelRepository) {}

  async execute({id}: IRequest): Promise<Levels> {
    const level = await this.levelRepository.findById(id);

    if (!level) {
      throw new Error('Developer not found');
    }

    return level;
  }
}

export { FindLevelById };