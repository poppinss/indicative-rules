import * as klaw from 'klaw'
import * as fs from 'fs-extra'
import { join, basename, sep } from 'path'
import { Stats } from 'fs'

const docsFor = ['validations', 'sanitizations', 'raw']
const srcPath = join(__dirname, '..', 'src')
const docsDir = join(__dirname, '..', 'docs')
const baseUrl = 'https://github.com/poppinss/indicative-rules/tree/develop/src'

const moduleBlock = /\/\*{1,2}\s*\*\s@module .*\s*\*\//g
const ignoreLines = ['* @example']

function getMatter (permalink: string, category: string, filePath: string) {
  category = category.replace(/-/g, ' ')

  return [
    '---',
    `permalink: ${permalink}`,
    `title: ${permalink}`,
    `category: ${category}`,
    `gh_url: ${filePath.replace(srcPath, baseUrl)}`,
    '---',
    '',
  ]
}

function getFiles (
  location: string,
  filterFn: (item: { path: string, stats: Stats }) => boolean,
): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const files: string[] = []

    klaw(location)
    .on('data', (item: { path: string, stats: Stats }) => {
      if (!item.stats.isDirectory() && filterFn(item)) {
        files.push(item.path)
      }
    })
    .on('end', () => resolve(files))
    .on('error', reject)
  })
}

async function readFiles (locations: string[]) {
  return Promise.all(locations.map((location: string) => {
    return fs.readFile(location, 'utf-8')
  }))
}

function extractComments (contents: string) {
  let context = 'idle'
  const lines: string[] = []
  contents = contents.replace(moduleBlock, '')
  const sourceLines = contents.split('\n')

  for (let line of sourceLines) {
    if (line.trim() === '/**') {
      context = 'in'
    } else if (line.trim() === '*/' && context === 'in') {
      context = 'out'
      break
    } else if (ignoreLines.includes(line.trim())) {
    } else if (context === 'in') {
      lines.push(line.replace(/\*/g, '').replace(/^\s\s/, ''))
    }
  }

  return lines.join('\n')
}

async function writeDocs (basePath: string, nodes: { location: string, comments: string }[]) {
  Promise.all(nodes.map((node) => {
    const location = join(basePath, node.location.replace(srcPath, '').replace(/\.ts$/, '.md'))
    return fs.outputFile(location, node.comments)
  }))
}

/**
 * Converts all source files inside a directory to `.adoc`
 * files inside docs directory
 *
 * @method srcToDocs
 *
 * @param  {String}  dir
 *
 * @return {void}
 */
async function srcToDocs (dir: string) {
  const location = join(srcPath, dir)
  const srcFiles = await getFiles(location, (item) => {
    return item.path.endsWith('.ts') && !item.path.endsWith('index.ts')
  })

  const filesContents = await readFiles(srcFiles)

  const filesComments = srcFiles.map((location, index) => {
    const fnName = basename(location).replace(/\.ts$/, '')
    const pathsTree = location.split(sep)
    pathsTree.pop()

    const category = pathsTree.pop()!

    const matter = getMatter(fnName, category, location)
    const doc = matter.concat(extractComments(filesContents[index]))
    return { comments: doc.join('\n'), location }
  })

  await writeDocs(docsDir, filesComments)
}

Promise
  .all(docsFor.map((dir) => srcToDocs(dir)))
  .then(() => {
    console.log(`Generated docs inside ${docsDir}`)
  })
  .catch(console.error)
