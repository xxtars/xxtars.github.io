# Bohao Xing：网站与 CV 维护约定

以下是用户已确认的项目习惯。新会话先遵守这些约定，不必反复询问；后续用户的明确要求优先于本文。这些约定优先于下方 al-folio 模板的通用建议。

## News

- 新增前先看 `_news/` 中已有内容，保持简短的一句话，不默认写完整论文标题、作者或宣传性描述。
- 论文接收消息采用 `One paper on [research topic] was accepted to [venue].`，用简短研究主题概括工作。
- 期刊用已有简称，例如 `IEEE TMM`、`IEEE TAFFC`、`IEEE TIP`、`IJCV`，句中不加期刊年份；会议名称后保留年份，例如 `ICLR 2026`、`NeurIPS 2026`。
- 示例：`One paper on hierarchical test-time training for facial action unit detection was accepted to IEEE TMM.`
- 日期写在 front matter，沿用 `inline: true` 和 `related_posts: false`；不默认额外添加论文链接。

## Publications 与 PDF CV

- 网页论文条目显示标题、作者、期刊或会议、年份以及可用链接，不额外显示 `Accepted for publication`。内部可保留 `keywords={accepted}`；不要因此改动 PDF CV 的接收论文分类。
- 正式 DOI、卷期、页码尚未提供时不编造。期刊扩展版与原会议论文作为独立成果保留。
- 新论文默认加入完整 Publications 列表，不自动加入首页 Selected Publications。首页精选及其顺序由 `selected` 和 `display_order` 控制。
- 官方 BibTeX 与网页展示链接分开维护。ICLR 的官方论文页面按钮用 `ICLR Proceedings`；额外链接放在 `_data/publication_links.yml`，不要仅为按钮改写官方 BibTeX。PDF 可在展示层补充同名链接。
- 论文或审稿经历的事实信息更新时，同步网站与 PDF CV 的相关内容，并检查论文数量、作者顺序、姓名重音符号和共同一作标记；仅调整网页展示的请求按其范围处理。
- 网站论文源是 `_bibliography/papers.bib`，网页 CV 源是 `_data/cv.yml`。公开下载文件是 `assets/pdf/CV_TENK_BohaoXING.pdf`。
- PDF 以同级 `../CV/` 下现有 TENK LaTeX 项目的 `CV.tex`、`references.bib` 和 `list_of_publications.tex` 为源；编译后更新上述下载文件，不用 RenderCV 产物替换。保留已有本地修改，检查 PDF 排版，不擅自改模板字体、字号和页边距。
- PDF 的已接收论文保留在 accepted / in press 分类，计入含 in press 的发表总数。更新本地源和网站 PDF 不代表已同步 Overleaf；推送 Overleaf 需要用户明确要求。

## 审稿经历

- 不添加 `(invited)`。
- 网页会议审稿经历保留年份；PDF 的会议列表不逐项写年份，ICML 已有的 `Gold Reviewer 2026` 荣誉标注保留。
- 会议与期刊各自按用户认可的知名度顺序排列，web 与 PDF 一致。这是审稿经历的排序规则，不用于重新排列论文列表。
- 期刊顺序：IJCV → TMM → TAFFC → PR → TOMM → SPL → TBIOM → IJHCI。特别注意 PR 在 TAFFC 之后。
- 会议顺序：NeurIPS → ICML → ICLR → CVPR → ECCV → AAAI → ICASSP → ICME → IJCB → SCIA。新增会刊时结合该顺序安排，不只将新项目机械放在末尾。

## 页面文字与设计

- 导航和标题沿用 `Home`、`Publications`、`Teaching`、`News` 等正常大小写，不用全大写样式；`CV` 保持缩写，包括导航和网页 CV 标题。PDF 标题沿用其模板。
- 联系入口保持在底部图标区域，不公开添加邮箱地址。
- 社交图标保持一致的视觉语言：实心外形与透明镂空主体。CV 使用现有的人物文档图标，Google Scholar 使用现有的实心底镂空图标；颜色跟随主题，不硬编码黑色。
- 图标保持简洁，与现有图标一致，不单独给 CV 增加悬停文字；保留必要的可访问名称。
- 模板示例和隐藏内容保持不可见，不因主题更新重新暴露。
- 首页研究简介保持概括性，围绕多模态大模型的可信情感理解，突出能力、隐私、可靠性和可解释性，避免堆砌具体实验任务。现有认可措辞见 `_pages/about.md`。
- 修改后检查明暗主题，尤其是 News 文字对比度和 CV 年份显示。

## 交付习惯

- 常规网站维护完成必要检查后提交、推送，并确认线上部署和相关下载文件更新；用户明确要求只做本地修改时除外。
- 将后续确认的新偏好补充到本文，替换过时约定，不把一次性的排障日志当成长期偏好。
- 本文只记录本网站的维护约定，不复制私人写作 skill 的内容到公开仓库。

# Agent Guidelines for al-folio

A simple, clean, and responsive Jekyll theme for academics.

## Quick Links by Role

- **Are you a coding agent?** → Read [`.github/copilot-instructions.md`](.github/copilot-instructions.md) first (tech stack, build, CI/CD, common pitfalls & solutions)
- **Customizing the site?** → See [`.github/agents/customize.agent.md`](.github/agents/customize.agent.md)
- **Writing documentation?** → See [`.github/agents/docs.agent.md`](.github/agents/docs.agent.md)
- **Need setup/deployment help?** → [INSTALL.md](INSTALL.md)
- **Troubleshooting & FAQ?** → [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Customization & theming?** → [CUSTOMIZE.md](CUSTOMIZE.md)
- **Quick 5-min start?** → [QUICKSTART.md](QUICKSTART.md)

## Essential Commands

### Local Development (Docker)

The recommended approach is using Docker.

```bash
# Initial setup & start dev server
docker compose pull && docker compose up
# Site runs at http://localhost:8080

# Rebuild after changing dependencies or Dockerfile
docker compose up --build

# Stop containers and free port 8080
docker compose down
```

### Pre-Commit Checklist

Before every commit, you **must** run these steps:

1.  **Format Code:**
    ```bash
    # (First time only)
    npm install --save-dev prettier @shopify/prettier-plugin-liquid
    # Format all files
    npx prettier . --write
    ```
2.  **Build Locally & Verify:**

    ```bash
    # Rebuild the site
    docker compose up --build

    # Verify by visiting http://localhost:8080.
    # Check navigation, pages, images, and dark mode.
    ```

## Critical Configuration

When modifying `_config.yml`, these **must be updated together**:

- **Personal site:** `url: https://username.github.io` + `baseurl:` (empty)
- **Project site:** `url: https://username.github.io` + `baseurl: /repo-name/`
- **YAML errors:** Quote strings with special characters: `title: "My: Cool Site"`

## Development Workflow

- **Git & Commits:** For commit message format and Git practices, see [.github/GIT_WORKFLOW.md](.github/GIT_WORKFLOW.md).
- **Code-Specific Instructions:** Consult the relevant instruction file for your code type.

| File Type                                     | Instruction File                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Markdown content (`_posts/`, `_pages/`, etc.) | [markdown-content.instructions.md](.github/instructions/markdown-content.instructions.md)       |
| YAML config (`_config.yml`, `_data/`)         | [yaml-configuration.instructions.md](.github/instructions/yaml-configuration.instructions.md)   |
| BibTeX (`_bibliography/`)                     | [bibtex-bibliography.instructions.md](.github/instructions/bibtex-bibliography.instructions.md) |
| Liquid templates (`_includes/`, `_layouts/`)  | [liquid-templates.instructions.md](.github/instructions/liquid-templates.instructions.md)       |
| JavaScript (`_scripts/`)                      | [javascript-scripts.instructions.md](.github/instructions/javascript-scripts.instructions.md)   |

## Common Issues

For troubleshooting, see:

- [Common Pitfalls & Workarounds](.github/copilot-instructions.md#common-pitfalls--workarounds) in copilot-instructions.md
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed solutions
- [GitHub Issues](https://github.com/alshedivat/al-folio/issues) to search for your specific problem.
