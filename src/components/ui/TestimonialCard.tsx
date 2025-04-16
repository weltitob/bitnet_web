
type TestimonialCardProps = {
  text: string
  authorName: string
  authorRole: string
  authorColor: string
}

const TestimonialCard = ({ text, authorName, authorRole, authorColor }: TestimonialCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl">
      <div className="bg-dark-200/70 backdrop-blur-md p-8 border border-white/10 h-full flex flex-col">
        <p className="text-base text-gray-300 leading-relaxed flex-grow mb-6 italic relative pt-8" 
           style={{ 
            position: 'relative',
            paddingTop: '2rem'
          }}
        >
          <span 
            style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-0.5rem',
              fontSize: '5rem',
              color: 'rgba(255, 140, 0, 0.2)',
              fontFamily: 'serif',
              lineHeight: 1
            }}
          >
            "
          </span>
          {text}
        </p>
        <div className="flex items-center border-t border-white/10 pt-6">
          <div className="w-12 h-12 rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: authorColor }}></div>
          <div className="flex flex-col">
            <span className="font-semibold text-white text-base">{authorName}</span>
            <span className="text-gray-400 text-sm mt-1">{authorRole}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard