import type { SiteTemplate } from '../../types';
export const artemisTemplate: SiteTemplate = { ...{
        "id": "artemis",
        "gitUrl": "https://github.com/weelume/artemis-template",
        "name": "Artemis · 产品与视觉设计",
        "localizedNames": {
            "en": "Artemis · Product & visual designer"
        },
        "sceneId": "corporate-site",
        "listed": false,
        "tags": [
            "设计师作品集",
            "奶油白",
            "海军蓝",
            "橙色点缀",
            "中英文",
            "PC / iPad / H5"
        ],
        "summary": "为初创团队打造的设计师作品集：漂浮拼贴首屏、5 个完整案例、灵感实验室、设计日志与演示联系表单。",
        "accentColor": "#ff5900",
        "cover": "/templates/artemis/screenshots/desktop-home.webp",
        "screenshots": [
            {
                "src": "/templates/artemis/screenshots/desktop-home.webp",
                "alt": "Artemis desktop home",
                "device": "desktop",
                "width": 1440,
                "height": 1000
            },
            {
                "src": "/templates/artemis/screenshots/desktop-works.webp",
                "alt": "Artemis desktop works",
                "device": "desktop",
                "width": 1440,
                "height": 1000
            },
            {
                "src": "/templates/artemis/screenshots/desktop-blog.webp",
                "alt": "Artemis desktop blog",
                "device": "desktop",
                "width": 1440,
                "height": 1000
            },
            {
                "src": "/templates/artemis/screenshots/desktop-contact.webp",
                "alt": "Artemis desktop contact",
                "device": "desktop",
                "width": 1440,
                "height": 1000
            },
            {
                "src": "/templates/artemis/screenshots/tablet-home.webp",
                "alt": "Artemis tablet home",
                "device": "tablet",
                "width": 834,
                "height": 1180
            },
            {
                "src": "/templates/artemis/screenshots/tablet-works.webp",
                "alt": "Artemis tablet works",
                "device": "tablet",
                "width": 834,
                "height": 1180
            },
            {
                "src": "/templates/artemis/screenshots/tablet-blog.webp",
                "alt": "Artemis tablet blog",
                "device": "tablet",
                "width": 834,
                "height": 1180
            },
            {
                "src": "/templates/artemis/screenshots/tablet-contact.webp",
                "alt": "Artemis tablet contact",
                "device": "tablet",
                "width": 834,
                "height": 1180
            },
            {
                "src": "/templates/artemis/screenshots/mobile-home.webp",
                "alt": "Artemis mobile home",
                "device": "mobile",
                "width": 390,
                "height": 844
            },
            {
                "src": "/templates/artemis/screenshots/mobile-works.webp",
                "alt": "Artemis mobile works",
                "device": "mobile",
                "width": 390,
                "height": 844
            },
            {
                "src": "/templates/artemis/screenshots/mobile-blog.webp",
                "alt": "Artemis mobile blog",
                "device": "mobile",
                "width": 390,
                "height": 844
            },
            {
                "src": "/templates/artemis/screenshots/mobile-contact.webp",
                "alt": "Artemis mobile contact",
                "device": "mobile",
                "width": 390,
                "height": 844
            }
        ]
    }, surfaces: [{ id: 'site', name: '设计师作品集', platform: 'pc', locales: ['zh', 'en'], pages: [{ slug: "", title: "首页", localizedTitles: { en: "Home" }, load: () => import('./pages/HomePage') },
                { slug: "works", title: "作品", localizedTitles: { en: "Works" }, load: () => import('./pages/WorkPage') },
                { slug: "playground", title: "实验室", localizedTitles: { en: "Playground" }, load: () => import('./pages/PlaygroundPage') },
                { slug: "works/finflow", title: "finflow", localizedTitles: { en: "finflow" }, load: () => import('./pages/CasePage') },
                { slug: "works/launchpad", title: "launchpad", localizedTitles: { en: "launchpad" }, load: () => import('./pages/CasePage') },
                { slug: "works/healthsync", title: "healthsync", localizedTitles: { en: "healthsync" }, load: () => import('./pages/CasePage') },
                { slug: "works/talentbridge", title: "talentbridge", localizedTitles: { en: "talentbridge" }, load: () => import('./pages/CasePage') },
                { slug: "works/marketmingle", title: "marketmingle", localizedTitles: { en: "marketmingle" }, load: () => import('./pages/CasePage') },
                { slug: "blog", title: "设计日志", localizedTitles: { en: "Journal" }, load: () => import('./pages/BlogPage') },
                { slug: "blog/designing-an-mvp", title: "设计 MVP", localizedTitles: { en: "Designing an MVP" }, load: () => import('./pages/ArticlePage') },
                { slug: "blog/a-brand-that-feels-like-you", title: "品牌的表达", localizedTitles: { en: "A brand that feels like you" }, load: () => import('./pages/ArticlePage') },
                { slug: "blog/a-homepage-with-a-purpose", title: "有目的的首页", localizedTitles: { en: "A homepage with a purpose" }, load: () => import('./pages/ArticlePage') },
                { slug: "contact", title: "联系我们", localizedTitles: { en: "Contact" }, load: () => import('./pages/ContactPage') },
                { slug: "privacy", title: "隐私政策", localizedTitles: { en: "Privacy" }, load: () => import('./pages/PolicyPage') },
                { slug: "terms", title: "使用条款", localizedTitles: { en: "Terms" }, load: () => import('./pages/PolicyPage') }] }] };
