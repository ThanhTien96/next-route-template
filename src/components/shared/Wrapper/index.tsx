import clsx from 'clsx'
import React from 'react'

const LayoutWrapper = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <section className={clsx('container py-8', className)}>
        {children}
    </section>
  )
}

export default LayoutWrapper