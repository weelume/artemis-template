import type { ReactNode } from 'react';
import './globals.css';
export const metadata = { title: 'Artemis · 产品与视觉设计', description: '为初创团队打造清晰、温暖而有辨识度的数字体验' };
export default function Layout({ children }: {
    children: ReactNode;
}) { return <html lang="zh-CN" data-scroll-behavior="smooth"><body>{children}</body></html>; }
