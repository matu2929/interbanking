module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/src/**/*.test.ts'], // Solo buscará archivos de prueba con la extensión .test.ts
  modulePathIgnorePatterns: ['<rootDir>/dist/'], // Ignorar la carpeta dist al correr tests
};
