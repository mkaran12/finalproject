'use client'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='bg-black  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
      </div>
      <div className='p-4'>
        <Link href={'/page/condition-of use'}>Condition of use</Link>
        <Link href={'/page/privacy-policy'}>Privacy Notice</Link>
        <Link href={'/page/help'}>Condition of use</Link>
      </div>
      <div className='flex justify-center text-sn'>
        <p>Copyright &copy; 2025 {APP_NAME}</p>
      </div>
      <div className='mt-8 justify-center text-sn text-gray-400'>
        <p>Powered by {APP_NAME}</p>
      </div>
    </footer>
  )
}
