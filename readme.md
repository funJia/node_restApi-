### 功能特点

1. 通过apidoc模块可生成api说明文档
2. 应用了restApi框架restify,可设计实现restapi  
3. 应用了ORM框架sequelize


### 安装及其他介绍
>安装apidoc:`npm install apidoc -g`
>测试地址:http://localhost:3900/getProjectList
>git: https://github.com/funJia/node_restApi-.git


## Example

```javascript
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
```

`apidoc -i example/ -o doc/`

api文档： 
![api文档](http://ogmy9zsil.bkt.clouddn.com/liblog/apidoc.png "api文档")
