
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
# Ready Go Duel: 聚会破冰与纷争解决终端 ⚡️

**还在用石头剪刀布决定谁去拿外卖吗？太由古老了！**
**Ready Go Duel** 是你的新一代“纷争终结者”和“聚会气氛组”。这不仅仅是一个比拼反应速度的游戏，更是一个合法的“大吼大叫”和“坑害朋友”的理由。

---

## 🎮 三大核心模式

### 1. 👉 触屏死斗 (Touch Mode)
* **玩法**：屏幕一分为二，红蓝对抗。当信号灯亮起（GO!），拼的就是手速！
* **体验**：毫秒级的胜负只在眨眼之间。谨防“抢跑”，系统内置防抖动检测，**提前出手直接判负**！

### 2. 🎙️ 狮吼功 (Voice Mode)「内测」
* **玩法**：释放你的压力！不需要手，只需要嗓门。当信号出现，谁先喊出声音谁就赢！
* **高光时刻**：
    * 支持 **“高光时刻”回放**：赢了之后可以回放刚才的尖叫声波，看看谁的声音更像土拨鼠。
    * **声纹可视化**：看见声音的力量。

### 3. ♾️ 无限世界 (Infinite Mode)
* **玩法**：不再是一局定胜负。系统自动随机分配“彩头”（惩罚/奖励），一轮接一轮，直到一方彻底认输。
* **场景**：适合漫漫长夜的宿舍卧谈，或酒足饭NB的聚会下半场。

---

## 🏆 “彩头”系统：让胜负更有意义

赢了只是干巴巴的开心？不！我们内置了丰富的**彩头库**，让每一局对决都充满心跳（或绝望）。

### 内置六大分类：
* **🍔 美食**：请喝超大杯奶茶、负责剥一盘小龙虾...
* **🧹 家务**：洗一周的碗、负责倒垃圾、给对方按摩...
* **🤡 整蛊**：朋友圈发丑照、学猫叫、模仿大猩猩...
* **❤️ 互动**：公主抱一分钟、深情对视、夸奖对方...
* **💰 破财**：发 5.20 红包、清空购物车...
* **✨ 自定义**：支持上传 .txt 文件，导入你们专属的“恩怨情仇”！

### 🔐 隐私功能
* **盲盒模式**：彩头可以设置为“隐藏”，只有胜负已分时点击才能揭晓。
* **密码锁**：怕内容太劲爆被围观？给彩头加上密码，只有当事人能看！

---

## 📸 战报生成

打完别走！一键生成 **赛后战报长图**。
* 记录胜负比分
* 记录反应时间（精确到 ms）
* 记录赢走的奖品
* **朋友圈装酷必备！**

---

## 💡 最佳食用场景

1.  **情侣/夫妻**：
    * *“老公，今晚谁洗碗？”* —— 别吵了，Ready Go Duel 一局定胜负。
    * *“周末去哪玩？”* —— 输的人听赢的人。
2.  **职场/同事**：
    * *“谁下楼拿咖啡？”* —— 触屏模式，手慢无。
    * *“今晚谁买单？”* —— 运气交给反应力。
3.  **聚会/团建**：
    * 打开 **语音模式**，看谁喊得最破音，绝对是全场爆笑的焦点。
4.  **治愈社恐**：
    * 不知道聊什么？拿出来玩两把，瞬间拉近距离。
5.  **更多玩法，期待你们的解锁🔓！**
    **评论区见！**

---

> **Ready? Go!** > 哪怕是为了那一杯免费的奶茶，也请全力以赴吧！
    `,
    url: 'https://ai.bornforthis.cn/ReadyGoDuel/',
    // githubUrl: 'https://github.com/AndersonHJB/ReadyGoDuel',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Game Development'],
    iconName: 'Sparkles',
    status: 'live',
    // status: 'beta',
    thumbnailUrl: 'https://ai.bornforthis.cn/images/P02-ReadyGoDuel.png',
  },
  {
    id: 'LittleSteps-BigMoments',
    title: '棠棠周岁礼物🎁「相册」',
    thumbnailUrl: 'http://ai.bornforthis.cn/images/P03-FirstSight.png',
    description: '相册',
    githubUrl: 'https://github.com/AndersonHJB/FirstSight',
    url: 'https://ai.bornforthis.cn/FirstSight/',
    articleUrl: 'https://bornforthis.cn',
    tags: ['Computer Vision', 'Analysis'],
    iconName: 'Eye',
    status: 'beta',
    // status: 'concept',
    featured: true,
    content: `<div align="center">
时光 · 家书

Timeless Family Album

<p align="center">
<b>岁月 · 静好 | 把时间写成诗</b>
</p>
</div>

💌 写在前面

在这个快节奏的数字时代，我们每天都在拍摄成千上万张照片，但它们往往沉睡在冰冷的硬盘或云端，渐渐被遗忘。

「时光 · 家书」 不仅仅是一个相册，它更像是一本放在床头、触手可及的纸质影集。我们希望通过温暖的纸张质感、手写的字迹和极简的叙事，帮你找回翻阅老照片时的那份感动。

这里没有复杂的功能，只有最纯粹的——爱与回忆。

🌿 设计理念

"我们无法留住时间，但我们可以留住时间里的爱与感动。"

纸的温度：界面采用米色纸张纹理，仿佛泛黄的信纸，承载着厚重的时光感。

见字如面：大量运用手写字体，就像亲人的一纸家书，传递着指尖的温度。

极简叙事：摒弃繁杂的干扰，让每一张照片、每一段文字都成为主角，静静讲述它的故事。

✨ 珍藏的篇章

🏠 家庭影像 (Family Album)

记录那些看似平淡，回过头看却闪闪发光的日常。

无论是周末午后的野餐，除夕夜热气腾腾的饺子，还是雨天窝在沙发上的一本书。这里存放着家庭的共同记忆，每一个瞬间都配有详细的文字记录，让照片不再是静止的图像，而是一段鲜活的故事。

👣 成长足迹 (Growth Timeline)

所有的惊喜，都藏在长大的每一个瞬间里。

专为孩子设计的时间轴记录。从第一次睁眼看世界，到第一次蹒跚学步，再到第一次背上书包。每一个里程碑都被精心标注了日期和月龄，用时间轴串联起生命最初的奇迹。

📖 阅读体验

沉浸式灯箱：点击照片，世界安静下来，只剩下你和那段回忆。

胶片感排版：如同拍立得般的照片展示，随意散落在桌面上，充满生活气息。

流动的交互：温柔的过渡动画，如同微风翻动书页，带来舒适的浏览体验。

<div align="center">
<p>愿这份「家书」，能成为你留给未来最珍贵的礼物。</p>
<p>© 2025 时光 · 家书</p>
</div>`
  },
  {
    id: 'MemorySpark',
    title: '圣诞树🎄',
    thumbnailUrl: 'https://ai.bornforthis.cn/images/P04-MemorySpark.png',
    description: '挥挥手，让回忆化作漫天星辰。一个只属于你的、由光点与照片编织的梦境森林。',
    // githubUrl: 'https://github.com/AndersonHJB/FirstSight',
    url: 'https://ai.bornforthis.cn/MemorySpark/index-ProMax.html',
    articleUrl: 'https://bornforthis.cn',
    tags: ['Digital Art', 'Christmas', 'Memories', 'Magic'],
    iconName: 'Gift',
    status: 'live',
    // status: 'beta',
    // status: 'concept',
    featured: true,
    content: `# 🎄 由光与回忆编织的圣诞树

这个冬天，不想送你千篇一律的礼物。于是，我种下了一颗特别的树。

它没有真实的枝叶，也不需要浇水，它是由**流动的星尘**和我们珍贵的**回忆碎片**凝聚而成的。

这是一个属于你的静谧角落。在这里，时间是悬浮的，星星是听话的。你不需要触碰屏幕，只需要像魔法师一样挥挥手，就能掌控这片星河。

---

## ✨ 体验你的“魔法时刻”

这不是一个普通的网页，而是一个互动的魔法橱窗。请打开摄像头，赋予双手魔力：

* **✊ 握紧拳头 · 凝聚 (Gather)**
当你想念的时候，紧握双手。散落在宇宙中的星光会瞬间奔向你，聚合成一棵闪闪发光的圣诞树，守护着这一刻的温暖。
* **🖐 张开手掌 · 释放 (Release)**
当你想要自由的时候，张开手掌。树身会化作无数萤火虫般的星点，向四周散开，仿佛一场永不落幕的金色烟花。
* **🤏 指尖捏合 · 拾取 (Catch)**
看到那张漂浮的照片了吗？那是我们某一刻的笑脸。轻轻捏合手指，就能将它从星空中“抓”到眼前，细细回味。
* **👋 左右挥手 · 环视 (Explore)**
不需要鼠标，你的手势就是风。轻轻挥动，视角便随之旋转，带你从不同角度欣赏这棵记忆之树。

---

## 📸 挂上你的独家记忆

点击右侧的按钮，上传那些对你意义非凡的照片吧。

它们不会只是呆板地贴在墙上，而是会像魔法挂件一样，优雅地悬浮在树的周围，随着呼吸般的灯光轻轻律动。在这个虚拟的空间里，每一张照片都是一颗永不熄灭的星星。

> "愿你眼中有光，手中有花，记忆里全是温暖。Merry Christmas!"

# 在线体验

- 基础版本：[https://ai.bornforthis.cn/MemorySpark/](https://ai.bornforthis.cn/MemorySpark/)
- Pro 版本：[https://ai.bornforthis.cn/MemorySpark/index-pro.html](https://ai.bornforthis.cn/MemorySpark/index-pro.html)
- Pro Max 版本：[https://ai.bornforthis.cn/MemorySpark/index-ProMax.html](https://ai.bornforthis.cn/MemorySpark/index-ProMax.html)
`
  },
];
