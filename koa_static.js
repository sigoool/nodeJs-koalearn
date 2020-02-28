const Koa = require("koa");
const static =require("koa-static");
const path = require("path");

let app = new Koa();

const staticPath="./static"
app.use(static(
	path.join( __dirname, staticPath)
))
app.use(async (ctx)=>{
	ctx.cookies.set("sid","hello world",{
		domain:"localhost",
		path:"/index",
		maxAge:10 *60 *1000,
		expires:new  Date("2020-03-01"),
		httpOnly:false,
		overwrite:false
	})
	ctx.body="hello static! cookies is ok";
})

app.listen(3000,()=>{
	console.log("post is run 3000");
})
