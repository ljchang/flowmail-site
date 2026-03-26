import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const REPO = 'ljchang/flowmail';
const APP_NAME = 'FlowMail';
const ASSET_MATCH = '.dmg';

interface ReleaseData {
  version: string;
  url: string;
  size: number;
  name: string;
}

function formatSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

const CACHE_KEY = `gh-release-${REPO}`;

function getCachedRelease(): ReleaseData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const {data, timestamp} = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL_MS) return null;
    return data;
  } catch {
    return null;
  }
}

function setCachedRelease(data: ReleaseData): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({data, timestamp: Date.now()}),
    );
  } catch {
    // sessionStorage may be full or unavailable
  }
}

function parseRelease(json: any): ReleaseData | null {
  if (!json?.tag_name || !Array.isArray(json.assets)) return null;
  const asset = json.assets.find((a: any) => a.name?.includes(ASSET_MATCH));
  if (!asset) return null;
  return {
    version: json.tag_name,
    url: asset.browser_download_url,
    size: asset.size,
    name: asset.name,
  };
}

const RELEASES_URL = `https://github.com/${REPO}/releases/latest`;

export default function FlowMailDownload(): JSX.Element {
  const [release, setRelease] = useState<ReleaseData | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = getCachedRelease();
    if (cached) {
      setRelease(cached);
      setLoading(false);
      return;
    }

    const apiUrl = `https://api.github.com/repos/${REPO}/releases/latest`;

    async function fetchRelease() {
      const headers: Record<string, string> = {
        Accept: 'application/vnd.github.v3+json',
      };
      if (typeof window !== 'undefined') {
        const etag = sessionStorage.getItem(CACHE_KEY + '-etag');
        if (etag) headers['If-None-Match'] = etag;
      }

      const res = await fetch(apiUrl, {headers});

      if (res.status === 304) {
        const raw = sessionStorage.getItem(CACHE_KEY);
        if (raw) {
          const {data} = JSON.parse(raw);
          setCachedRelease(data);
          return data as ReleaseData;
        }
        throw new Error('Cache missing after 304');
      }

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const etag = res.headers.get('ETag');
      if (etag && typeof window !== 'undefined') {
        sessionStorage.setItem(CACHE_KEY + '-etag', etag);
      }

      const json = await res.json();
      const data = parseRelease(json);
      if (!data) throw new Error('Invalid release data');
      setCachedRelease(data);
      return data;
    }

    fetchRelease()
      .then((data) => {
        setRelease(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>Loading latest release info...</div>
    );
  }

  if (error || !release) {
    return (
      <div className={styles.fallback}>
        <p>Download the latest release from GitHub:</p>
        <a
          href={RELEASES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fallbackLink}>
          View Releases on GitHub
        </a>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className={styles.versionBadge}>Latest: {release.version}</span>
      <a
        href={release.url}
        className={styles.card}
        aria-label={`Download ${APP_NAME} for macOS`}>
        <span className={styles.platformName}>macOS (Apple Silicon)</span>
        <span className={styles.fileInfo}>
          DMG &middot; {formatSize(release.size)}
        </span>
      </a>
      <p className={styles.note}>
        Requires macOS 13+ on Apple Silicon (M1/M2/M3/M4).
      </p>
    </div>
  );
}
