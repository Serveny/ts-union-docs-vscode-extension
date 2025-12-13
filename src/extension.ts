import * as vscode from 'vscode';

// This extension is only a wrapper for the ts-union-doc TS compiler plugin, so not much code needed here
export function activate(_: vscode.ExtensionContext) {
	console.log('Extension "ts-union-docs" is now active!');
}

export function deactivate() {}
