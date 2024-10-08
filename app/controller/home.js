const { Controller } = require('egg');
const path = require('node:path');
class HomeController extends Controller {
  async server() {
    const { ctx } = this;
    // home/index.js 对应 webpack entry 的 home/index, 构建后文件存在 app/view 目录  
    await ctx.render('home/index.js', { message: 'egg vue server side render' });
  }

  async client() {
    const { ctx,app } = this;
    // renderClient 前端渲染，Node层只做 layout.html和资源依赖组装，渲染交给前端渲染。与服务端渲染的差别你可以通过查看运行后页面源代码即可明白两者之间的差异
    await ctx.renderClient('app.js', { message: 'egg vue client render render' },{ layout: path.join(app.baseDir, 'app/web/view/layout.html'),});
  }
}

module.exports = HomeController;
