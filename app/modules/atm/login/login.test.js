export default ngModule => {
    describe('create-client', () => {
        beforeEach(window.module(ngModule.name));

        it('should do smth', () => {
            expect(false).to.be.equal(false);
        })
    })
}