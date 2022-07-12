module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['<rootDir>/__tests__/**/*.@(test).[jt]s?(x)'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
    },
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    moduleDirectories: [
        'node_modules',
        '<rootDir>/__tests__'
    ]
};
