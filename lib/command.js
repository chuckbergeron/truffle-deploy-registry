#!/usr/bin/env node

var processAllArtifacts = require('./processAllArtifacts')

let artifactsPath = null
if (process.argv.length > 2) {
  artifactsPath = process.argv[2]
}

let outputPath = null
if (process.argv.length > 3) {
  outputPath = process.argv[3]
}

if (artifactsPath) {
  console.log('Processing artifacts in ' + artifactsPath + '...')
} else {
  console.log('Usage: <artifacts-path> <output-path>?')
  process.exit(1)
}

if (!outputPath) {
  outputPath = artifactsPath
}

processAllArtifacts(artifactsPath, outputPath)
  .then(() => {
    console.log('Complete!')
  })
  .catch((error) => {
    console.error('Unable to process: ', error)
  })
