import React from 'react'
import { useConfig } from 'nextra-theme-docs'
import { useTheme } from 'next-themes'
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: function LogoComponent() {
    const { resolvedTheme } = useTheme()
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={resolvedTheme === 'dark' ? '/logo_w.png' : '/logo.png'}
          alt="AISYNC"
          width={24}
          height={24}
          style={{ borderRadius: '4px' }}
        />
        <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
          AISYNC
        </span>
      </div>
    )
  },
  faviconGlyph: 'A',
  project: {
    link: 'https://github.com/aisync-labs',
  },
  chat: {
    link: 'https://discord.com/invite/7rh6uewA',
  },
  docsRepositoryBase: 'https://github.com/aisync-labs/aisync-docs',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © <a href="https://www.aisync.world" target="_blank">AISYNC</a>
      </span>
    )
  },
  navbar: {
    extraContent: (
      <>
        <a
          href="https://x.com/aisync_labs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '1rem', display: 'inline-flex', alignItems: 'center' }}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </>
    )
  }
}

export default config
