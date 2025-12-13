
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'jarvis-ui',
    title: 'Jarvis 全息界面',
    description: '受钢铁侠启发的沉浸式全息 UI 体验，展示了未来的 Web 交互设计。',
    content: `
# Jarvis 全息界面设计

这是我对未来人机交互界面（HCI）的一次大胆尝试。受《钢铁侠》电影中 Jarvis 系统的启发，我使用 **React Three Fiber** 和 **WebGL** 构建了这个沉浸式的 3D 仪表盘。

![Jarvis Demo](https://gemini.bornforthis.cn/images/P01-%E8%B4%BE%E7%BB%B4%E6%96%AF.png)

## 核心功能

*   **全息投影效果**：使用 Three.js 的 ShaderMaterial 实现了独特的光晕和扫描线效果。
*   **手势控制**：(开发中) 结合 MediaPipe 实现手势识别，允许用户在空中挥手控制界面。
*   **实时数据流**：模拟了 CPU、内存和网络状态的实时监控图表。

## 技术栈

1.  React 18
2.  Three.js / React Three Fiber
3.  TailwindCSS
4.  Framer Motion

> "Sometimes you gotta run before you can walk." - Tony Stark

欢迎在 GitHub 上提交 PR 或 Star！
    `,
    url: 'https://gemini.bornforthis.cn/jarvis-holographic-ui/',
    githubUrl: 'https://github.com/AndersonHJB/jarvis-holographic-ui', 
    articleUrl: 'https://bornforthis.cn/column/Python-Programming-Course/P10-Share/Interesting-project/01-Gemini3-jarvis-holographic-ui.html', 
    thumbnailUrl: 'https://ai.bornforthis.cn/images/P01-%E8%B4%BE%E7%BB%B4%E6%96%AF.png',
    tags: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'MediaPipe', 'Tailwind CSS'],
    iconName: 'Cpu',
    status: 'live',
    featured: true,
  },
  {
    id: 'ReadyGoDuel',
    title: 'Ready Go Duel',
    description: 'Ready Go Duel 是一款基于 React 开发的趣味双人反应竞技游戏，创新支持触屏点击与语音呐喊两种对战模式，并内置了防抢跑检测、毫秒级计时及彩头惩罚系统。',
    content: `
# Ready Go Duel: 双人反应竞技

这不仅仅是一个点击游戏，它是聚会时的破冰神器！

## 玩法介绍

1.  **触屏模式**：屏幕分为红蓝两区，倒计时结束后，谁先点击谁获胜。
2.  **语音模式**：这是最有趣的部分！使用 Web Audio API 监听麦克风音量。倒计时结束后，谁喊得更大声/更快，谁就赢！

### 游戏机制

- **防抢跑 (Anti-Cheat)**: 我们在倒计时期间添加了随机抖动（Jitter）。如果在 "GO" 出现之前操作，会被立即判定为**犯规（Foul）**。
- **高精度计时**: 使用 \`performance.now()\` 确保毫秒级的时间差计算。

## 惩罚转盘

输了怎么办？游戏内置了“惩罚转盘”，包含：
*   🥤 喝一杯水
*   💬 真心话大冒险
*   💪 做 10 个俯卧撑
*   ...以及自定义惩罚

快叫上你的朋友来一场对决吧！
    `,
    url: 'https://ai.bornforthis.cn/ReadyGoDuel/',
    githubUrl: 'https://github.com/AndersonHJB/ReadyGoDuel',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Game Development'],
    iconName: 'Sparkles',
    status: 'beta',
    thumbnailUrl: 'https://ai.bornforthis.cn/images/P02-ReadyGoDuel.png',
  },
  // {
  //   id: 'vision-analyzer',
  //   title: '视觉分析实验室',
  //   description: '上传图片即可获得深度分析，利用最新的视觉识别模型识别物体与场景。',
  //   url: '#',
  //   articleUrl: 'https://bornforthis.cn',
  //   tags: ['Computer Vision', 'Analysis'],
  //   iconName: 'Eye',
  //   status: 'concept',
  // },
];
