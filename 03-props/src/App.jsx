

// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div className='parent'>
//       <Card user='Aman Singh' age={18} img='' />
//       <Card user='Sarthak' age={28} img='https://plus.unsplash.com/premium_photo-1742455147775-4f5f6c09011b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
//       <Card user='Aditya' age={24} img='https://images.unsplash.com/photo-1747229521023-5f89d2749fa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
//     </div>
//   )
// }

// export default App

import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman Singh' age={18} img='https://images.unsplash.com/photo-1698758004450-1f9da080f9b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Sarthak' age={28} img='https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Aditya' age={24} img='https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App