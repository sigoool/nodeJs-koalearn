const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require('koa-bodyparser')
const app = new Koa();
const home= new Router();


// 使用ctx.body解析中间件
app.use(bodyParser())

app.use(async(ctx)=>{
	if(ctx.url==="/" && ctx.method==="GET"){
		let html = `
	      <h1>koa2 request post demo</h1>
	      <form method="POST" action="/">
	        <p>userName</p>
	        <input name="userName" /><br/>
	        <p>nickName</p>
	        <input name="nickName" /><br/>
	        <p>email</p>
	        <input name="email" /><br/>
	        <button type="submit">submit</button>
	      </form>
	    `
    	ctx.body = html
	}else if(ctx.url==="/" && ctx.method==="POST"){
		let postData = ctx.request.body;
		ctx.body=postData;
	}else{
		ctx.body = "=>404 error"
	}
})

app.listen(3000,()=>{
	console.log("port run in 3000");
})