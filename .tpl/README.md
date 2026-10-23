# Artemis · 产品与视觉设计作品集

参考 https://artemis1.framer.website/ 的独立响应式实现，默认中文，英文位于 `/en`。共 15 页、30 条语言路由；包含 5 个案例、实验室图集、FAQ、补充设计日志、联系与政策页。

首读 `.tpl/README.md`、`.tpl/template.json` 和 `.tpl/project.json`。

Node 24.16.0，pnpm 9.15.4。`pnpm install --frozen-lockfile` 安装；`pnpm dev` 启动 http://127.0.0.1:43308，Ctrl+C 停止。`pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build` 验证；`pnpm start` 启动生产版本。构建应在本地 Linux 文件系统完成。`pnpm bundle` 生成共享包。

品牌见 `config/brand.ts`，内容见 `content.ts`，主题见 `tokens.css` 和 `theme.css`，页面在 `pages/`，公共交互在 `components/`。修改后更新双语及对应检查。

表单仅本地校验；无账号、支付、消息发送、业务存储。原站没有日志、独立联系和政策页面，这些是本次补充内容。案例展示图中的英文为原始作品内容，不是可操作界面。无新增第三方依赖库，沿用既有固定版本。

运行素材来源与 SHA256 见 `public/templates/artemis/sources.json`；原站素材未确认再分发许可，禁止据本工程推定素材可以商用转售。详见 `.tpl/docs/LICENSE.md`。
