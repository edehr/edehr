import { version } from 'process'

if (version.includes('v18') || version.includes('v20')) {
  console.log(`Node Version: ${version}`)
} else {
  console.error('Unexpected version of Node is active ', version)
  process.exit(1)
}
