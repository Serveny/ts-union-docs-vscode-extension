# 🟦 TypeScript Union Docs VSCode Extension

[![Open VSX Version](https://img.shields.io/open-vsx/v/Serveny/ts-union-docs-vscode-extension)](https://open-vsx.org/extension/Serveny/ts-union-docs-vscode-extension)
[![Open VSX Downloads](https://img.shields.io/open-vsx/dt/Serveny/ts-union-docs-vscode-extension)](https://open-vsx.org/extension/Serveny/ts-union-docs-vscode-extension)
[![Open VSX Rating](https://img.shields.io/open-vsx/rating/Serveny/ts-union-docs-vscode-extension)](https://open-vsx.org/extension/Serveny/ts-union-docs-vscode-extension)

[![Version](https://vsmarketplacebadges.dev/version/Serveny.ts-union-docs-vscode-extension.svg)](https://marketplace.visualstudio.com/items?itemName=Serveny.ts-union-docs-vscode-extension)
[![Installs](https://vsmarketplacebadges.dev/installs/Serveny.ts-union-docs-vscode-extension.svg)](https://marketplace.visualstudio.com/items?itemName=Serveny.ts-union-docs-vscode-extension)
[![Rating](https://vsmarketplacebadges.dev/rating/Serveny.ts-union-docs-vscode-extension.svg)](https://marketplace.visualstudio.com/items?itemName=Serveny.ts-union-docs-vscode-extension)

A **VSCode TypeScript extension** that displays **JSDoc comments** from union type members directly in your editor's **quick info** (hover) tooltips.

<p align="center">
	<img width="600"  alt="image" src="demo.png" />
</p>

> [!IMPORTANT]
> Issues please to the [TS language plugin repository](https://github.com/Serveny/ts-union-docs-plugin)

### 💡 The Problem

By default, when you use a value from a union type, TypeScript's quick info just shows the literal value or the base union type. Documentation associated with that specific member of the union is ignored.

### ✨ The Solution

It wraps the TS compiler plugin _ts-union-docs-plugin_ and acivates it for the VSCode internal TypeScript compiler. The real magic happens here: https://github.com/Serveny/ts-union-docs-plugin

## Extension Settings

None
