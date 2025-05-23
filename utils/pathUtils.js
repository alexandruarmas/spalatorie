/**
 * Utility for handling paths in the application
 * Ensures proper prefixing for GitHub Pages deployment
 */

export function getBasePath() {
  // For local development, use empty string
  // For production (GitHub Pages), use '/spalatorie'
  return process.env.NODE_ENV === 'production' ? '/spalatorie' : '';
}

/**
 * Add the correct base path to asset URLs
 * @param {string} path - The asset path
 * @returns {string} - The properly formatted path with base path if needed
 */
export function getAssetPath(path) {
  const basePath = getBasePath();
  
  // If path already includes the base path or is an external URL, return as is
  if (path.startsWith('http') || path.startsWith(basePath)) {
    return path;
  }
  
  // Make sure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Return the path with the base path
  return `${basePath}${normalizedPath}`;
} 