const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_VerifyToken: 'RoqaiaYaqaRoro',
    Meta_WA_accessToken: 'EAAIIoQNF80YBAJaZA2H66i3SSULrLNntM50sduykZB6LZA0ugHqbdtR1OFRsaiC7GzpQbQcPVIrpCiTel1DfrRGhxT1BcUOvHECQrnC7cBTDTeidqJeZCrTfDCRB096Yd0RfHYbnEM1uQhETvefgzHAwAIaVJKMPBjfVJKpsVE5ZBZCOZBxOyRVBFpnA4hplZCT120HZAO1gdXeaX68X9RMb7',
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
