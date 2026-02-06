import fs from 'fs';

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute({
    fileContent,
    fileDestination,
    fileName = 'table.txt',
  }: Options): boolean {
    try {
      const destination = fileDestination ?? 'outputs';

      fs.mkdirSync(destination, { recursive: true });
      fs.writeFileSync(`${destination}/${fileName}`, fileContent);

      console.log('File created!');
      return true;
    } catch (error) {
      return false;
    }
  }
}
