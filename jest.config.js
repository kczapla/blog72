module.export = async () => {
  return {
    testRegex: '((\\.|/*.)(spec))\\.js?$',
    setupFilesAfterEnv: [
      '<rootDir>/jest.setup.js'
    ]
  }
}
