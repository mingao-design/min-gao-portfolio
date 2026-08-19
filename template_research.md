# GitHub 多页面作品集模板调研

本调研服务于 Min Gao 作品集的下一版信息架构：首页只展示精选项目，项目进入独立案例页，并预留文章写作区。

| 模板 | GitHub | 已确认的结构 | 对 Min Gao 的适用性 |
| --- | --- | --- | --- |
| Case | https://github.com/erlandv/case | Astro 多内容类型主题，包含 Projects、Writing、Journey、Decisions 等独立内容集合；项目采用案例研究叙事，支持独立内容页面。 | **最适合借鉴架构。** 可直接满足“项目列表 + 独立详情 + 文章”的长期需求，但默认视觉偏开发者，需要保留当前策展档案室视觉并重写展示层。 |
| Astrofy | https://github.com/manuelernestog/astrofy | Astro/Tailwind 个人作品集模板，包含 Blog、CV、Project Section、Store 和 RSS；文章使用内容集合管理。 | 适合作为轻量级内容管理参考，但项目默认更接近首页模块，需补充独立案例路由才能完全匹配需求。 |

## 建议的架构结论

应采用 Case 的**内容模型**而非复制其开发者风格：

1. `/`：首页，只展示 4–6 个精选项目与简短作者介绍。
2. `/projects`：项目索引，按空间、数字、平面与产品设计筛选。
3. `/projects/[slug]`：每个项目独立案例页，包含导语、角色/地点/年份、原始过程页、双语说明和返回索引。
4. `/writing` 与 `/writing/[slug]`：文章索引和独立文章页，后续新增内容不影响项目结构。
5. `/about` 与 `/contact`：独立的个人与联系页面。

以上结构让作品不再堆叠在首页，同时能在 GitHub 中以一项目一文件、每篇文章一文件的方式持续维护。
