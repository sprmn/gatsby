import path from 'path'
import objectAssign from 'object-assign'
import pathResolver from './path-resolver'
import loadFrontmatter from './load-frontmatter'

export default function buildPage (directory, page) {
  const pageData = loadFrontmatter(page)

  const relativePath = path.relative(path.join(directory, 'pages'), page)
  const pathData = pathResolver(relativePath)

  return objectAssign({}, pageData, pathData)
}