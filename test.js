const expect= require("chai").expect;
const jwt_decode = require('./jwt_decode.js');

describe("JWT decoder", function() {
    context('with non-string token', function (){
        it("throw type error", function() {
            expect(jwt_decode.bind(jwt_decode, 1)).to.throw(TypeError, 'token must be a string');
        });
    })

    context('with invalid format token', function () {
        it("throw type error", function() {
            const invalidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey';

            expect(jwt_decode.bind(jwt_decode, invalidToken)).to.throw(TypeError, 'token is invalid');
        });
    })

    context('with ok token', function () {
        it("return header+payload object string", function() {
            const okToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

            const expectResult = '{"alg":"HS256","typ":"JWT"}{"sub":"1234567890","name":"John Doe","iat":1516239022}';
            const decodedJwt = jwt_decode(okToken);

            expect(decodedJwt).to.equal(expectResult);
        });
    })

});
