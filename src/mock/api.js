import Mock from "mockjs"
Mock.mock('/api/user/login', {  
    "status": 0,
    "data": {
        "id": 12,
        "username": "admin",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "creareTime": 123434343423,
        "updateTime": 123434343423
    }
});