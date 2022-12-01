import { getRepositoryToken, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

// TODO: Type 추가
export const RepositoryProvider = (entity: any, methods: any) => ({
  provide: getRepositoryToken(entity),
  inject: [getDataSourceToken()],
  useFactory(dataSource: DataSource) {
    return dataSource.getRepository(entity).extend(methods);
  },
});
