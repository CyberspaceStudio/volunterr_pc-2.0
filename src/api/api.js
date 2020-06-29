import service from '../utlis/service';

/**
 * @description登录接口
 */
const Api = {
    Login(data) {
        return service({
            method: "post",
            url: '/department/login',
            data
        })
    },
    Register(data) {
        return service({
            method: "post",
            url: '/department/register/',
            data
        })
    }
}

export default Api