# Prime Context for Claude Code

Use the command `tree` to get an understanding of the current root project folder structure.

Start with reading the `CLAUDE.md` file if it exists to get an understanding of the project.

Read the current root project folder README.md file to get an understanding of the project.

Read key files in root project codebase of directory.

And please run this command to wake up the `serena` mcp sever in background : `uvx --from git+https://github.com/oraios/serena serena start-mcp-server --transport sse
  --enable-web-dashboard true --context ide-assistant` with openning local web dashboard.

**IMPORTANT : Then, when the Serena mcp sever connected, Use Serena to search through the current root project codebase. If you get any errors using Serena, retry with different Serena tools.**

Explain back to me (Based on current root project folder):
- Project structure
- Project purpose and goals
- Key files and their purposes
- Any important dependencies
- Any important configuration files