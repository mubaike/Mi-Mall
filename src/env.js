let baseURL;
switch (process.env.NODE_ENY) {
    case 'dev':
        baseURL = 'http://dev-mall-pre.sprinboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.sprinboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://prod-mall-pre.sprinboot.cn/api';
        break;
    default:
        baseURL = 'http://dev-mall-pre.sprinboot.cn/api';
        break;
}

export default {
    baseURL
}