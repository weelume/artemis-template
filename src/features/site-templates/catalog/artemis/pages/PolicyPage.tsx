'use client';
import { usePathname } from 'next/navigation';
import type { SiteTemplatePageProps } from '../../../types';
import { bi } from '../content';
import { Shell } from '../components/Shell';
const privacy = [
    [bi('演示数据与表单', 'Demo data and forms'), bi('本模板是静态展示网站。联系表单只在浏览器中进行校验，不将填写内容发送给服务器，也不写入本地存储。刷新页面后，界面状态会重置。', 'This is a demonstration website. The contact form validates in your browser, sends no entries to a server, and does not write them to local storage. Refreshing resets the interface state.')],
    [bi('字体、图片与外部链接', 'Fonts, images, and external links'), bi('运行字体与图片均由本网站本地提供。点击邮箱链接将打开你的邮件应用；链接目标可能适用其他隐私规则。宿主站点的服务日志不属于本模板表单数据。', 'Runtime fonts and images are served locally. Email links open your mail application, whose own privacy rules may apply. Host service logs are separate from this template’s form data.')],
    [bi('正式使用前', 'Before production use'), bi('运营者需要补充真实主体、联系方式、实际数据处理与保存规则。如接入统计、账号或真实表单服务，应更新本说明并按适用要求提供相应控制。', 'The operator must add their identity, contact details, and actual processing and retention policies. Update this notice and provide appropriate controls when adding analytics, accounts, or real form services.')],
];
const terms = [
    [bi('网站展示范围', 'Demonstration scope'), bi('项目、评价与文章用于展示模板结构和交互。案例图片来自参考站，文字中的业务结果不构成效果承诺。联系校验不表示已建立合作或收到项目委托。', 'Projects, testimonials, and articles demonstrate layout and interactions. Case imagery comes from the reference site, and described outcomes are not performance promises. Local form validation does not establish an engagement.')],
    [bi('素材与源码许可', 'Assets and source rights'), bi('原创实现与参考站图片的权利边界不同。素材来源及摘要见素材清单，未确认授权前不得据此主张图片可再次出售或自由分发。', 'Original implementation and reference imagery have separate rights. Sources and checksums are recorded in the asset inventory. Do not assume images may be resold or freely redistributed without permission.')],
    [bi('真实服务与责任', 'Real services and responsibility'), bi('本模板不提供账号、支付、真实消息发送或业务数据存储服务。正式运营前应核对内容准确性、素材权利、可访问性和实际服务条款。', 'This template does not provide accounts, payments, real messaging, or business data storage. Before operating it, review content accuracy, asset rights, accessibility, and terms for actual services.')],
];
export default function PolicyPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { const isPrivacy = usePathname().endsWith('/privacy'), sections = isPrivacy ? privacy : terms; return <Shell {...{ locale, basePath }}><article className="art-container art-policy"><header className="art-page-heading"><span className="art-eyebrow">{bi('演示说明 · 2026 年 10 月 23 日', 'DEMONSTRATION NOTICE · OCTOBER 23, 2026')[locale]}</span><h1>{(isPrivacy ? bi('隐私政策', 'Privacy policy') : bi('使用条款', 'Terms of use'))[locale]}</h1><p>{bi('请在正式使用前依据真实业务更新本页', 'Update this page for your actual business before production use')[locale]}</p></header><div className="art-prose">{sections.map(([title, text]) => <section key={title.en}><h2>{title[locale]}</h2><p>{text[locale]}</p></section>)}</div></article></Shell>; }
