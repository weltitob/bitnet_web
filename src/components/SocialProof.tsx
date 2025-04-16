import { useRef } from 'react'

const USERS = [
  {name: '@btc_max', color: '#ff8c00'},
  {name: '@sats_stacker', color: '#bf5fff'},
  {name: '@lightning_node', color: '#00b8ff'}, 
  {name: '@ordinal_fan', color: '#00e676'},
  {name: '@nft_collector', color: '#ff5e00'},
  {name: '@bitcoin_lisa', color: '#8f00ff'},
  {name: '@satoshi_disciple', color: '#0070ff'},
  {name: '@onchain_analyst', color: '#00c853'}
]

const SocialProof = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="social-proof-section">
      <div className="social-proof-header">
        <span>Join our growing community</span>
        <h3>Over 50,000+ Bitcoin users trust BitNet</h3>
      </div>
      
      <div ref={containerRef} className="users-scroll-container">
        <div className="users-scroll-inner">
          {/* First set of users */}
          {USERS.map((user, index) => (
            <div key={`user-${index}`} className="user-avatar">
              <div className="avatar" style={{backgroundColor: user.color}}></div>
              <span className="username">{user.name}</span>
            </div>
          ))}
          
          {/* Duplicate set for infinite scroll effect */}
          {USERS.map((user, index) => (
            <div key={`user-duplicate-${index}`} className="user-avatar">
              <div className="avatar" style={{backgroundColor: user.color}}></div>
              <span className="username">{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialProof