import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import { siteConfig } from '@/lib/config'
import AnalyticsBusuanzi from '@/components/AnalyticsBusuanzi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const since = parseInt(siteConfig('SINCE') || currentYear, 10)
  const copyrightDate = since < currentYear ? `${since}-${currentYear}` : `${currentYear}`
  const author = siteConfig('AUTHOR') || siteConfig('TITLE') || 'NotionNext'
  const version = siteConfig('VERSION') || ''

  return (
    <footer className='fuwari-footer py-6 text-center text-sm text-[var(--fuwari-muted)]'>
      <div className='max-w-6xl mx-auto px-4'>
        
        {/* 修复点：给第一个 p 标签加上了闭合的 </p> */}
        <p>
          <i className='far fa-copyright mr-1' />
          {copyrightDate} {author}. All Rights Reserved.
        </p>

        <p className='mt-1'>
          Powered by{' '}
          <a href='https://github.com/tangly1024/NotionNext' target='_blank' rel='noopener noreferrer' className='fuwari-link font-semibold'>
            NotionNext
          </a>{' '}
          / Theme{' '}
          <span className='font-semibold text-[var(--fuwari-primary)]'>Fuwari</span>
          {' '}| Hosted on{' '}
          <a href='https://www.cloudflare.com/' target='_blank' rel='noopener noreferrer' className='fuwari-link font-semibold'>
            Cloudflare
          </a>
          {', '}
          <a href='https://vercel.com/' target='_blank' rel='noopener noreferrer' className='fuwari-link font-semibold'>
            Vercel
          </a>
          {', '}
          <a href='https://dnshe.com/' target='_blank' rel='noopener noreferrer' className='fuwari-link font-semibold'>
            DNSHE
          </a>
        </p>

        <p className='mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs [&_a]:fuwari-link [&_br]:hidden'>
          <BeiAnSite />
          <BeiAnGongAn className='inline-flex items-center justify-center' />
          <AnalyticsBusuanzi />
        </p>
        
      </div>
    </footer>
  )
}

export default Footer

