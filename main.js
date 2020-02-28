var koa=require("koa");
var Router=require("koa-router")
var app=new koa();

let home=new Router();
home.get("/",async(ctx)=>{
	let html=`
		<ul>
			<li><a href="/page/helloworld">/page/helloworld</a></li>
			<li><a href="/page/404">/page/404</a></li>
			<li><a href="/page/age?a=123&b=abc">/page/age</a></li>
		</ul>
	`;
	ctx.body=html;
})
let page=new Router();
// 子路由
page.get("/helloworld",async(ctx)=>{
	ctx.body="this helloworld page";
}).get("/404",async(ctx)=>{
	ctx.body="this 404 page";
}).get("/age",async(ctx)=>{
	let url=ctx.url;
	let query=ctx.request.query;
	let querystring=ctx.request.querystring;
	let ctx_query=ctx.query;
	let ctx_querystring=ctx.querystring;
	let obj={
		"re_query":query,
		"re_querystring":querystring,
		"ctx_query":ctx_query,
		"ctx_querystring":ctx_querystring,
		"url":url,
	}
	ctx.body=obj;
	// ctx.body="this age page"
})

let router=new Router();

router.use("/",home.routes(),home.allowedMethods())
router.use("/page",page.routes(),page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);

console.log("http is run localhost:3000")
