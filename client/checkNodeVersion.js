
if (process.version.includes('v18')) {
  console.log(`Node Version: ${process.version}`)
} else {
  console.error('Unexpected version of Node is active ', process.version)
  process.exit(1)
}
