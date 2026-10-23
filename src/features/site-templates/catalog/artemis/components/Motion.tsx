'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const spring = { type: 'spring', bounce: 0, duration: 0.8 } as const;

function useCompact() {
    const [compact, setCompact] = useState(false);
    useEffect(() => {
        const query = window.matchMedia('(max-width: 809px)');
        const update = () => setCompact(query.matches);
        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
    }, []);
    return compact;
}

// 原站手机端关闭首屏飞入、拖拽与标签散入；减少动态效果时所有位移均静止。
export function Entrance({ children, className = '', x = 0, y = 40, scale = 1, delay = 0, amount = 0.1, mobileStatic = false, hover = false, duration = 0.8, bounce = 0 }: {
    children: ReactNode; className?: string; x?: number; y?: number; scale?: number;
    delay?: number; amount?: number; mobileStatic?: boolean; hover?: boolean; duration?: number; bounce?: number;
}) {
    const reduced = useReducedMotion(), compact = useCompact();
    const disabled = reduced || (mobileStatic && compact);
    return <motion.div className={`art-entrance ${mobileStatic ? 'art-mobile-static' : ''} ${className}`}
        initial={{ opacity: 0, x, y, scale }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        whileHover={hover && !disabled ? { scale: 1.14, rotate: 2, transition: { ...spring, duration: 0.45 } } : undefined}
        viewport={{ once: true, amount }} transition={{ ...spring, bounce, duration: disabled ? 0 : duration, delay: disabled ? 0 : delay }}>
        {children}
    </motion.div>;
}

const orbit = [
    { x: 251, y: 110, rotate: -25, delay: 0.8, duration: 1.4, speed: -0.15, tap: -17 },
    { x: -200, y: 200, rotate: 32, delay: 1, duration: 1.2, speed: -0.2, tap: 15 },
    { x: 200, y: -100, rotate: -19, delay: 1, duration: 1.3, speed: 0.05, tap: -8 },
    { x: -200, y: -100, rotate: 12, delay: 1.1, duration: 1.4, speed: 0.05, tap: 8 },
];
export function OrbitCard({ index, className, children }: { index: number; className: string; children: ReactNode }) {
    const reduced = useReducedMotion(), compact = useCompact(), config = orbit[index];
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, value => reduced || compact ? 0 : value * config.speed);
    return <motion.div className={`art-orbit-position ${className}`} style={{ y }}>
        <motion.div className="art-orbit art-mobile-static" data-motion="hero-card"
            initial={{ opacity: 0, x: config.x, y: config.y, rotate: 25, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: config.rotate, scale: 1 }}
            transition={{ ...spring, duration: reduced || compact ? 0 : config.duration, delay: reduced || compact ? 0 : config.delay }}
            onMouseDown={event => event.preventDefault()} drag={!reduced && !compact} dragMomentum={false} dragSnapToOrigin
            dragTransition={{ bounceDamping: 100, bounceStiffness: 866 }}
            whileTap={reduced || compact ? undefined : { scale: 0.9, rotate: config.tap, transition: { ...spring, bounce: 0.25, duration: 0.45 } }}>
            {children}
        </motion.div>
    </motion.div>;
}

export function HeroTitle({ text }: { text: string }) {
    const reduced = useReducedMotion(), compact = useCompact();
    return <h1 aria-label={text}>{text.split('\n').map((line, lineIndex) => <span className="art-title-line" key={lineIndex} aria-hidden="true">{line.split(' ').map((word, i) => <motion.span className="art-title-word art-mobile-static" key={i}
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, duration: reduced || compact ? 0 : 0.8, delay: reduced || compact ? 0 : 0.2 + (lineIndex * 2 + i) * 0.075 }}>{word}{' '}</motion.span>)}</span>)}</h1>;
}

export function HeroDetail({ children, button = false }: { children: ReactNode; button?: boolean }) {
    return <motion.div className="art-mobile-static" initial={{ opacity: 0, y: button ? -20 : -10, scale: button ? 0.9 : 1 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ ...spring, duration: button ? 1.4 : 1.2, delay: button ? 1.2 : 0.8 }}>{children}</motion.div>;
}

// 轨道位移按像素/秒计算，窗口变化时重新测量；复制组仅负责补齐接缝，不重复键盘焦点。
export function Ticker({ children, className = '', speed, hoverFactor = 1 }: { children: ReactNode; className?: string; speed: number; hoverFactor?: number }) {
    const ref = useRef<HTMLDivElement>(null), group = useRef<HTMLDivElement>(null), width = useRef(0);
    const hovered = useRef(false), focused = useRef(false), x = useMotionValue(0), reduced = useReducedMotion();
    const inView = useInView(ref);
    useEffect(() => {
        if (!group.current) return;
        const measure = () => { width.current = group.current?.getBoundingClientRect().width ?? 0; };
        const observer = new ResizeObserver(measure);
        observer.observe(group.current);
        measure();
        return () => observer.disconnect();
    }, []);
    useAnimationFrame((_, delta) => {
        if (reduced || !inView || focused.current || !width.current) return;
        const next = x.get() + Math.min(delta, 64) / 1000 * speed * (hovered.current ? hoverFactor : 1);
        x.set(next >= 0 ? next - width.current : next);
    });
    return <div className={`art-ticker ${className}`} ref={ref} data-motion="ticker"
        onMouseEnter={() => { hovered.current = true; }} onMouseLeave={() => { hovered.current = false; }}
        onFocusCapture={() => { focused.current = true; }} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) focused.current = false; }}>
        <motion.div className="art-ticker-track" style={{ x }}>
            <div className="art-ticker-group" ref={group}>{children}</div>
            <div className="art-ticker-group art-ticker-copy" aria-hidden="true" inert>{children}</div>
        </motion.div>
    </div>;
}

export function LoopVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
    const ref = useRef<HTMLVideoElement>(null), visible = useInView(ref), reduced = useReducedMotion();
    useEffect(() => {
        const video = ref.current;
        if (!video) return;
        if (visible && !reduced) {
            void video.play().catch(error => {
                // 离屏或页面卸载时主动 pause 会取消未完成的 play；这属于预期生命周期。
                if (error instanceof DOMException && error.name === 'AbortError' && (video.paused || !video.isConnected)) return;
                console.warn(`[Artemis] 视频自动播放受限: ${src}: ${String(error)}`);
            });
        } else video.pause();
    }, [visible, reduced, src]);
    return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" aria-label={label} onError={() => console.error('[Artemis] 视频加载失败', { src })} />;
}

export function HeaderMotion({ children }: { children: ReactNode }) {
    const reduced = useReducedMotion(), { scrollY } = useScroll();
    const y = useTransform(scrollY, value => reduced ? 0 : value * 0.5);
    return <motion.header className="art-header" style={{ y }}>{children}</motion.header>;
}
