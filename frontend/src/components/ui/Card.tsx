import React from 'react'
import { cn } from '../../lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'neumorphism'
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 shadow-lg dark:shadow-2xl',
    glass: 'glass',
    neumorphism: 'neumorphism'
  }

  return (
    <div className={cn(
      'rounded-2xl p-6 transition-all duration-300',
      variants[variant],
      className
    )}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('pb-4 border-b border-secondary-200 dark:border-secondary-700', className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('text-lg font-semibold text-secondary-900 dark:text-secondary-100', className)}>
      {children}
    </h3>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('pt-4', className)}>
      {children}
    </div>
  )
}
