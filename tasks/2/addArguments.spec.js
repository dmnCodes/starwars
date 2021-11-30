import addArguments from './addArguments'

describe('addArguments', () => {
    it('should add 2 arguments', () => {
        expect(addArguments(2, 3)).toEqual(5)
        expect(addArguments(2, '3')).toEqual(5)
    })

    it('should add 3 arguments', () => {
        expect(addArguments(2, 3, 13)).toEqual(18)
        expect(addArguments(2, '3', '13')).toEqual(18)
    })
})