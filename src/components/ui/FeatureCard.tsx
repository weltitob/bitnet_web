import { ReactNode, useEffect, useRef } from 'react'

type FeatureCardProps = {
  icon: ReactNode
  title: string
  description: string
  position: 'right' | 'left' | 'bottom'
}

const FeatureCard = ({ icon, title, description, position }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.opacity = '1'
                cardRef.current.style.transform = 'translateY(0)'
              }
            }, position === 'right' ? 300 : position === 'left' ? 800 : 1300)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [position])

  const getPositionStyle = () => {
    switch (position) {
      case 'right':
        return {
          position: 'absolute' as const,
          right: '5%',
          top: '120px',
          zIndex: 10
        }
      case 'left':
        return {
          position: 'absolute' as const,
          left: '5%',
          top: '200px',
          zIndex: 10
        }
      case 'bottom':
        return {
          position: 'absolute' as const,
          top: '400px',
          left: '50%',
          transform: 'translateX(-50%)'
        }
    }
  }

  return (
    <div
      ref={cardRef}
      className="bg-dark-200/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 border border-white/10 shadow-xl flex flex-col gap-4 relative overflow-hidden z-10 opacity-0 hover:border-white/15 hover:shadow-2xl max-w-[300px]"
      style={{
        ...getPositionStyle(),
        transform: position === 'bottom' ? 'translateX(-50%) translateY(10px)' : 'translateY(10px)',
        opacity: 0,
        transition: 'all 500ms cubic-bezier(0.19, 1, 0.22, 1)'
      }}
      onMouseEnter={() => {
        if (cardRef.current) cardRef.current.style.transform = position === 'bottom' ? 'translateX(-50%) translateY(-5px)' : 'translateY(-5px)'
        if (iconRef.current) iconRef.current.style.transform = 'scale(1.1)'
      }}
      onMouseLeave={() => {
        if (cardRef.current) cardRef.current.style.transform = position === 'bottom' ? 'translateX(-50%) translateY(0)' : 'translateY(0)'
        if (iconRef.current) iconRef.current.style.transform = 'scale(1)'
      }}
    >
      <div style={{ position: 'relative' }}>
        <div
          ref={iconRef}
          className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white p-2.5 shadow-[0_4px_12px_rgba(255,94,0,0.3)] transition duration-200 ease-in-out"
          style={{
            width: '3rem',
            height: '3rem',
            background: 'linear-gradient(to bottom right, #ffa500, #ff5e00)',
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '0.625rem',
            boxShadow: '0 4px 12px rgba(255, 94, 0, 0.3)',
            transition: 'transform 200ms ease-in-out'
          }}
        >
          {icon}
        </div>
        <div className="flex-grow mt-2">
          <h3 className="text-lg text-white font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard