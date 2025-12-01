import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import logo from './assets/logo.png'
import { MdOpacity } from 'react-icons/md'
import { FiTarget,  FiCode, FiTrendingUp } from 'react-icons/fi';
import { FiSearch, FiLayers, FiZap, FiRefreshCw } from 'react-icons/fi'
import { MdLightbulb } from 'react-icons/md'
import { FiShield, FiLock, FiEye, FiUserCheck } from 'react-icons/fi'
function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className='header'>
        <strong>47<sup>o</sup></strong>Degrees
        <Sidebar />
      </div>
      <div id='home' className='logo'
    //  style={{backgroundImage: `url(${logo})`,backgroundSize: 'cover',
 // backgroundPosition: 'center',
 
 //}}
 >
        <div className='overlay'
       style={{
    position: 'relative',
    zIndex: 2,
    opacity: 1    // <<< forces the text to NOT inherit opacity from parent
  }}>
       <h1>47<sup>0</sup></h1>
        <hr />
        <h2>Degrees</h2>
        <h3 className='precise'>Precision over Assumption</h3>
      </div>
      <div className='Glance'>
        <div className='card'>
          <FiTarget size={40} color='#0D1326' />
         <h1>Strategic Consulting</h1> 
        </div>
         <div className='card'>
          <FiTrendingUp size={40} color='#0D1326' />
         <h1>Brand & Growth</h1> 
        </div>
         <div className='card'>
          <MdLightbulb size={40} color='#0D1326' />
         <h1>Product Innovation</h1> 
        </div>

      </div>
        
      </div>
      <div id="about" className='About'>
      <h1>About</h1>
      <p>
        At 47 Degrees, we operate at the precise angle where insight meets execution. Our name represents more than a number—it symbolizes the exact calibration required to transform business challenges into measurable outcomes. In a world saturated with assumptions and educated guesses, we bring mathematical precision to strategic decision-making.
      </p>
      <p>
        Founded on the principle that every business decision should be backed by data, analysis, and proven methodologies, 47 Degrees has established itself as a trusted partner for organizations seeking to navigate complexity with confidence. We don't believe in one-size-fits-all solutions or template-driven approaches. Instead, we immerse ourselves in understanding the unique dynamics of your business, your market, and your objectives.
      </p>
      <p>
        Our team comprises strategists, designers, developers, and analysts who share a common obsession: finding the exact right answer, not just any answer. We've worked across industries—from emerging startups building their first MVP to established enterprises reimagining their digital presence. What unites our clients is a commitment to doing things right, not just doing things quickly
      </p>
      <p>
        We understand that precision doesn't mean perfection, and it certainly doesn't mean paralysis. It means making informed decisions with clear reasoning, building products that solve real problems, and creating strategies grounded in market reality rather than wishful thinking. Every recommendation we make, every line of code we write, and every strategy we develop is rooted in careful analysis and battle-tested experience.
      </p>
      <p>
        At 47 Degrees, we measure success not by deliverables completed but by outcomes achieved. We're not satisfied with launching products—we want to see them gain traction. We don't just create brands—we build recognition and loyalty. We don't simply advise—we partner with you through implementation, iteration, and growth. Our work doesn't end when the project does; we remain invested in your long-term success.
      </p>
      <p>
        Whether you're developing a new digital product, refining your brand strategy, seeking confidential advisory support, or building an MVP that will define your market entry, 47 Degrees brings the precision, expertise, and commitment necessary to transform your vision into reality. We invite you to experience the difference that comes from working with a team that values accuracy over approximation, and results over rhetoric.
      </p>
      </div>
      <div id="services" className='Services'>
      <h1>Our Services</h1>
     <h5>Comprehensive solutions calibrated to your specific needs</h5>
     <div className='service-cards'>
      <div className='card'>
        <FiTarget size={40} color='#0D1326' />
        <p><strong>Strategic COnsulting</strong></p>
        <p>Data driven Insights that inform every decision</p>
      </div>
      <div className='card'>
        <MdLightbulb size={40} color='#0D1326' />
        <p><strong>Product Innovation</strong></p>
        <p>From concept to market ready products</p>
      </div>
      <div className='card'>
         <FiCode size={40} color='#0D1326' />
        <p><strong>Digital development</strong></p>
        <p>Crafting exceptional digital expenses</p>
      </div>
      <div className='card'>
        <FiTrendingUp size={40} color='#0D1326' />
        <p><strong>Growth Engineering</strong></p>
         <p>Data driven Insights that inform every decision</p>
      </div>
      </div>
      <div className='service-description'>
      <p>In an era where businesses face unprecedented complexity, our services are designed to cut through noise and deliver clarity. We don't offer generic packages or standardized solutions. Instead, we provide precisely calibrated services that address your specific challenges, opportunities, and market dynamics. Every engagement begins with deep discovery—understanding not just what you think you need, but what will actually move the needle for your business.</p>
      <p>
        Our strategic consulting practice is built on the foundation of rigorous analysis. We examine market data, competitive landscapes, customer behavior patterns, and operational metrics to develop strategies that aren't based on intuition alone. We believe in stress-testing assumptions, validating hypotheses, and building strategic frameworks that can withstand market volatility. Whether you're entering a new market, pivoting your business model, or optimizing existing operations, our consulting approach ensures you're making decisions with eyes wide open.
  
      </p>
      <p>
        Product innovation at 47 Degrees means transforming ideas into viable, valuable offerings. We guide you through ideation, validation, design, and development with equal attention to market fit and technical excellence. Our innovation process incorporates user research, competitive analysis, technical feasibility studies, and business model validation. We've learned that the best products emerge from a disciplined innovation process that balances creativity with commercial reality.
      </p>
      <p>
        Digital development is where precision becomes tangible. Our development teams build products that perform flawlessly, scale efficiently, and deliver exceptional user experiences. We employ modern development methodologies, rigorous testing protocols, and continuous integration practices to ensure every release meets the highest standards. From responsive web applications to complex enterprise systems, we bring the same attention to detail whether we're building an MVP or a mission-critical platform.
      </p>
      <p>
        Growth engineering represents our systematic approach to scaling businesses. We don't believe in growth hacks or shortcuts. Instead, we build sustainable growth engines through conversion optimization, customer acquisition strategies, retention programs, and data analytics. We establish measurement frameworks that track what matters, run experiments to validate growth hypotheses, and build repeatable processes that generate consistent results. Growth isn't an accident at 47 Degrees—it's an engineering discipline.
      </p>
      <p>
        Across all our services, we maintain our commitment to precision over assumption. We document our methodologies, share our reasoning, and create transparency in our processes. Our clients don't just receive deliverables—they gain understanding of why decisions were made and how to continue building on the foundation we've established together. This approach creates lasting value that extends well beyond our direct involvement in your business.
      </p></div>
     </div>
     <div  id='work' className='work'>
      <h1>How We Work</h1>
      <hr />
      <h3>Our methodolody studies market, competitors and opportunities</h3>
      <div className='service-cards'>
        <div className='card'>
           <FiSearch size={40} color='#0D1326' />
          <p><strong>Discover First</strong></p>
          <p>We begin every engagement with comprehensive discovery, understanding your business context, market position, and objectives before proposing solutions. Assumptions are identified, documented, and validated through research and data analysis.</p>
        </div>
        <div className='card'>
          <FiLayers size={40}  color='#0D1326'/>
          <p><strong>Structured Methodology</strong></p>
          <p>
            Our processes are designed for repeatability and predictability. We employ proven frameworks adapted to your specific situation, ensuring consistency in quality while maintaining flexibility to address unique challenges as they emerge.
          </p>
        </div>
        <div className='card'>
          <FiZap size={40} color='#0D1326'/>
          <p><strong>Metrics Driven Decisions</strong></p>
          <p>
            Every strategic recommendation and tactical decision is supported by data. We establish clear success metrics at the outset, track progress rigorously, and adjust course based on evidence rather than opinion or preference.
          </p>
        </div>
        <div className='card'>
           <FiTrendingUp size={40} color='#0D1326' />
          <p><strong>Continous Improvement</strong></p>
          <p>
            Our work doesn't end at launch. We monitor performance, gather feedback, analyze results, and recommend optimizations. We view every project as the beginning of an ongoing relationship focused on sustained success and measurable growth.
          </p>
        </div>

      </div>

     </div>
     <div id='silent' className='silent'>
      <h1>Silent Advisory</h1>
      <hr />
      <h3>Confidential strategic guidance for leaders who need expert counsel without public attribution</h3>
<div className='service-cards'>

  <div className='card'>
    <FiShield size={40} color='#0D1326' />
    <p><strong>Complete Confidentilaity</strong></p>
    <p>
      Your challenges, strategies, and plans remain entirely confidential with strict NDAs and secure communication channels
    </p>
  </div>
  <div className='card'>
    <FiLock size={40} color='#0D1326' />
    <p><strong>Discreet Engagement</strong></p>
    <p>No public acknowledgment of our relationship unless you explicitly choose otherwise
    </p>
  </div>
  <div className='card'>
    <FiEye size={40} color='#0D1326' />
    <p><strong>Objective Perspective</strong></p>
    <p>
      External viewpoint without internal politics or biases affecting recommendations
    </p>
  </div>
  <div className='card'>
    <FiUserCheck size={40} color='#0D1326' />
    <p><strong>Trusted Partnership</strong></p>
    <p>Long-term relationship built on trust, discretion, and consistent delivery of value</p>
  </div>

</div>
     </div>
     <div className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>47 Degrees</h3>
          <p>Precision over Assumption</p>
        </div>
        <div className='footer-section'>
          <h3>Services</h3>
          <p>Strategic Consulting</p>
          <p>Product Innovation</p>
          <p>Digital Development</p>
          <p>Growth Engineering</p>
        </div>
        <div className='footer-section'>
          <h3>Contact Us</h3>
          <p>Email:<strong>precisely47degrees@gmail.com</strong></p>
          <p>Phone:<strong>+254 (117) 543225</strong></p>
        </div>
        <div className='footer-section'>
          <h3>Follow Us</h3>

        </div>

      </div>
      <p>© 2024 47 Degrees. All rights reserved.</p>
     </div>
    </>
  )
}

export default App
