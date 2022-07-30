const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_VerifyToken: 'RoqaiaYaqaRoro',
    Meta_WA_accessToken: 'EAAIIoQNF80YBAGb5OZBiwCvXjI3g2zEr3E1YZBZCzCTSxFvhQsnDGOL9HeWVQpQZAeX6vyGlfBEKZBo0phpqbUkmyWxgzSGk0T4aSuNlyZACO5MiiqtAImmysc959rdDNgGMBLv14tgr3ArYeO7kVZBk0ZCozZAvDdoFjAHVfOWZBRTpXWzahnG8mVYYrNZCZBTszPIBEWSn2YkntX5IVYGG7JeG',
    Meta_WA_SenderPhoneNumberId: '109406781858892', 
    Meta_WA_wabaId: '104951692313063',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};
