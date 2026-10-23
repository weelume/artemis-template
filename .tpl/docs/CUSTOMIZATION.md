# 修改指南

1. 品牌：编辑 config/brand.ts，检查导航、页脚、联系信息。
2. 内容：编辑 content.ts 中对应双语项；图片放 public/templates/artemis/images，同步 sources.json 的 URL、许可与 SHA256。
3. 主题：编辑 tokens.css；局部与三端布局见 theme.css。默认 Poppins / MiSans；英文首屏保留原站斜体衬线装饰，中文按 28–44px 排版。
4. 页面：编辑 pages/；新增页面同步 meta.ts 与 .tpl/template.json，保持默认中文与 /en。
5. 交互：公共 Shell、FAQ、ProjectCard 在 components/；表单与图库分别在对应页。不得将演示校验描述成发送成功。

运行 typecheck、lint、test；路由变化增加 build。PC 1440×1000、iPad 834×1180、H5 390×844，补测 320px，检查菜单、语言、FAQ、图集和表单。
