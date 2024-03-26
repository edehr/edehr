
let version = process.version
if (version.includes('v18') || version.includes('v20')) {
  console.log(`Node Version: ${process.version}`)
} else {
  console.error('Unexpected version of Node is active ', process.version)
  process.exit(1)
}
