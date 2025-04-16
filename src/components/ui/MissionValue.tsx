import { ReactNode } from 'react'

type MissionValueProps = {
  icon: ReactNode
  title: string
  description: string
}

const MissionValue = ({ icon, title, description }: MissionValueProps) => {
  return (
    <div 
      className="bg-dark-200/70 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 ease-out border border-white/10 shadow-xl flex flex-col items-start text-left min-h-[200px] hover:-translate-y-2 hover:shadow-2xl hover:border-white/15"
      style={{
        background: 'rgba(20, 20, 25, 0.7)',
        backdropFilter: 'blur(15px)',
        borderRadius: '1rem',
        padding: '1.5rem',
        transition: 'all 300ms cubic-bezier(0.19, 1, 0.22, 1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        minHeight: '200px'
      }}
    >
      <div 
        className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary to-orange-600 text-white rounded-lg p-2 mb-6 transition-transform duration-200 ease-in-out shadow-[0_2px_8px_rgba(255,94,0,0.3)]"
        style={{
          flexShrink: 0,
          width: '3rem',
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
          color: 'white',
          borderRadius: '0.5rem',
          padding: '0.5rem',
          marginBottom: '1.5rem',
          transition: 'transform 200ms ease-in-out',
          boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
        }}
      >
        {icon}
      </div>
      <div>
        <h3 
          className="text-xl font-semibold text-white mb-3 tracking-tight"
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '0.75rem',
            letterSpacing: '0.01em'
          }}
        >
          {title}
        </h3>
        <p 
          className="text-sm text-gray-400 m-0 leading-relaxed font-normal"
          style={{
            fontSize: '0.9rem',
            color: '#aaa',
            margin: 0,
            lineHeight: 1.6,
            fontWeight: 400
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default MissionValue