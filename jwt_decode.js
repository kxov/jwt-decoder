'use strict';

const JWT_TOKEN_GROUPS = 3;

function jwt_decode(token)
{
    if (typeof token !== 'string') {
        throw new TypeError('token must be a string');
    }

    const groups = token.split('.');
    if (groups.length !== JWT_TOKEN_GROUPS) {
        throw new TypeError('token is invalid');
    }

    const header = atob(groups[0]);
    const payload = atob(groups[1]);

    return header + payload;
}

module.exports = jwt_decode
