import { plainToInstance } from 'class-transformer';

export function toDTO<T, V>(cls: new () => T, data: V | V[]): T | T[] {
  return plainToInstance(cls, data, {
    excludeExtraneousValues: true,
  });
}
