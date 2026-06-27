#metadata((
  slug: "markdown-is-not-all-you-need",
)) <frontmatter>

#set document(
  title: "Markdown is not all you need",
  description: "Markdown has become the default format for notes, content systems, and AI tooling, but many domains have outgrown it and would benefit from purpose-built text languages.",
)

#title()

Markdown has had a wild history. It was originally a Perl script created by #link("https://daringfireball.net/projects/markdown/")[John Gruber]. In his words, "Markdown is a text-to-HTML conversion tool for web writers." Gruber's simple format, as it turns out, was useful for many more people than just "web writers". Markdown has become the standard for #link("https://obsidian.md/")[personal knowledge management], #link("https://tina.io/")[content management systems], and everything AI: skills, `AGENTS.md`, subagents, and so on.

Markdown has taken on a kind of sublime aura that attracts developers to use it in almost any situation. Much of this has been positive for standardising a shared syntax, but I think it's time the pendulum swung a bit in the other direction. Take a look at the following two Markdown documents.

#figure(
  [
    ```md
    ---
    name: markdowner
    allowed-tools: Read Grep Bash(git diff *)
    context: fork
    agent: Explore
    shell: bash
    ---

    The command below will be executed using bash and dynamically inserted into the document!

    !`git diff HEAD`
    ```
  ],
  caption: "A Claude Code skill",
)

#figure(
  [
    ```md
    # [[This links to another note]]

    > [!warning] This now has a special "warning" style!
    > This is another link: [[Unstable Assumption A]].

    - [ ] Ask [[Legal]] about the crater clause
    - [x] File the moon invoice #i-am-a-tag

    This is actually an embedded image!
    ![[launch-diagram.png]]
    ```
  ],
  caption: "An Obsidian Markdown document",
)

These two documents share the same file extension, yet they use completely different grammars and do completely different things. I think it is obvious that both tools have outgrown Markdown and are calling for a DSL of some kind. You might argue that they are already there, except for the file extension.

I think the overreliance on Markdown in AI outputs is especially confusing. Tools aiming at "general intelligence" rely heavily on one output format that fails to effectively express many domains. In programming, professionals are turning to #link("https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html")[HTML for richer outputs]. I can see some of the same potential in mathematics: why spit out Markdown when the LLM could be writing a language that helps it perform manual calculations or produce verifiably correct work? I suspect most domains share similar frustrations with Markdown.

Markdown is not bad; it is just used for far too many things. I hope the rise of large language models means we will see more text-based languages that help these models—and hopefully humans too—express themselves across more domains.
