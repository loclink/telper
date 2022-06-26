#!/usr/bin/env node
const { program } = require("commander")
const { registerCommands } = require('./lib/core/command')
program.version(require('./package.json').version, '-v, --version', '打印版本号')
program.helpOption('-h, --help','帮助信息')
registerCommands()
program.parse(process.argv)