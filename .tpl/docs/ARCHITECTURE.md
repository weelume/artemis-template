# 架构与能力边界

应用根为 Next.js App Router。`src/app/[[...slug]]/page.tsx` 根据语言与页面元数据加载组件。通用模块在 `src/features/site-templates/catalog/artemis/`，按 config、content、tokens、components、pages、meta 分工。品牌由 config/brand.ts 管理，host.tsx 支持可选宿主注入。

主流程：路由 → 页面 → 公共组件 → 双语内容。链接以 basePath 生成，支持挂载到任意前缀。语言切换保留页面、查询参数与锚点。FAQ、图集、筛选和表单使用 React 状态；没有服务器业务数据、后台任务或数据库。运行素材在 public/templates/artemis，展示截图在 .tpl/assets。
