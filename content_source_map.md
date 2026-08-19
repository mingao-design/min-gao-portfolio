# 原始作品集结构记录

本文件用于记录网站重构时必须遵守的原始 PDF 顺序与内容来源。所有网页可见项目图、章节名称与排序，均应可追溯到 `/home/ubuntu/upload/portfolio.pdf`。

## 已确认的章节顺序

| PDF 页码 | 章节/项目 | 说明 |
| --- | --- | --- |
| 1 | 封面 | Min Gao 作品集封面。 |
| 2 | 目录 | 全书章节总览。 |
| 3 | 00 Design d’espace | 空间设计章节扉页。 |
| 4–9 | 空间设计项目 | 包含奥运村改造与 Silo 项目。 |
| 10 | 01 Innovation critique en design | 批判性设计章节扉页。 |
| 11 | L’Expérience Robinson vs l’algorithme | 批判性设计项目第一页。 |
| 12 | Le paysage résiduel | 批判性设计项目第二页。 |
| 13 | Dispositif interactif & interface gestuelle | 批判性设计项目第三页。 |
| 14 | Maison Yù | 批判性设计项目第四页。 |
| 15 | 02 Design digital & expérience | 数字设计章节扉页。 |
| 16 | P.A.R.I.S | 数字设计项目第一页。 |
| 17 | Co-mémoration | 数字设计/参与式展陈项目第一页。 |
| 18 | Co-mémoration | 数字设计/参与式展陈项目第二页。 |
| 19 | 03 Design graphique & VM | 平面设计章节扉页。 |
| 20 | Affiche de FRAC | 平面设计/信息可视化项目第一页。 |
| 21 | Affiche de FRAC | 平面设计/信息可视化项目第二页。 |
| 22 | Visual merchandising / narration spatiale | 品牌陈列与空间叙事项目页。 |
| 23 | 04 Design produit | 产品设计章节扉页。 |
| 24 | Cheng·Yi | 产品设计项目第一页。 |
| 25 | Growcable | 反计划报废的触觉设计项目页。 |
| 26 | Conception modulaire | 模块化家具与循环服务系统项目页。 |
| 27 | Jiangnan | 江南建筑语义转译的桌面装饰项目页。 |

## 继续确认的结论

从第 20–24 页可以确认，平面设计章节至少包含 `Affiche de FRAC` 与一个关于 **merchandising visuel / narration spatiale** 的品牌空间项目；随后第 23 页进入 **Design produit**，第 24 页开始 `Cheng·Yi` 产品项目。由此可以判断，网站需要以“章节扉页 + 连续项目页”的方式忠实映射整本 PDF，而不是只抽取少量项目做首页卡片展示。

## 已完成的内容映射

第 25–27 页确认了产品设计章节的三个尾部项目：`Growcable`、`Conception modulaire` 与 `Jiangnan`。至此，原始 PDF 的 27 页顺序、章节分段以及各视觉页面的网页化来源已经完整确认。网站接下来应将所有 27 页按页码顺序作为在线阅读内容呈现，同时通过法语/英语切换控制导读、章节说明与对应 PDF 下载入口；页面截图本身必须保持原始样貌。

## 当前重构原则

网站必须遵守以下约束：

1. 首页与项目流中不再使用任何生成图片。
2. 当前可展示的项目封面图，应直接来自原始 PDF 页面截图。
3. 后续需要继续确认第 15–27 页的章节、项目标题与排序，再决定网站的完整长页面或分项目详情结构。

## 新增确认

从第 15–19 页可以确认，原始 PDF 在空间设计与批判性设计之后，依次进入 **数字设计与体验**、随后过渡到 **平面设计 & VM**。其中 `P.A.R.I.S` 与 `Co-mémoration` 是数字设计章节内的重要项目，且 `Co-mémoration` 至少跨两页展示。因此网站重构时不能将当前首页仅视作四个独立项目卡，而应更接近“章节 + 连续页面”的在线阅读结构。
