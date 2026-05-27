'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  fade?: boolean
}

export function FadeUp({ children, delay = 0, className, fade = false }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      custom={delay}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fade ? fadeVariants : variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeUpSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export const fadeUpChild = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}
