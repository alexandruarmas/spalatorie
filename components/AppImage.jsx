import Image from 'next/image';
import { getAssetPath } from '../utils/pathUtils';

/**
 * A wrapper component around Next.js Image that handles GitHub Pages path issues
 * @param {Object} props - Component props
 * @param {string} props.src - Image source
 * @param {Object} props.rest - Other Image props
 * @returns {JSX.Element} - Image component with correct path
 */
export default function AppImage({ src, ...rest }) {
  const correctedSrc = getAssetPath(src);
  return <Image src={correctedSrc} {...rest} />;
}

/**
 * Helper function to get the correct path for any asset
 * Use this for video sources, background images, etc.
 * @param {string} src - Asset source
 * @returns {string} - Corrected asset path
 */
export function getImagePath(src) {
  return getAssetPath(src);
} 