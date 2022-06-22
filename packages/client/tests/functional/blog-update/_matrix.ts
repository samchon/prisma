import { defineMatrix } from '../_utils/defineMatrix'

export default defineMatrix(() => [
  [
    {
      provider: 'sqlite',
    },
    {
      provider: 'postgresql',
    },
    {
      provider: 'mysql',
    },
    {
      provider: 'sqlserver',
    },
    {
      provider: 'mongodb',
    },
    {
      provider: 'cockroachdb',
    },
  ],
])