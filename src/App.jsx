import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cards from './components/Cards'


function App() {

  return (
    <>
      <Nav/>
      <div className='row justify-content-around'>
      <Cards
      imgSrc = 'https://plus.unsplash.com/premium_photo-1715071976149-6f26134fc7f0?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'
      title ='paltes'
      descreption = 'white paltes and cooking tools'
      li1 = 'paltes'
      li2 = 'spoon'
      li3 = 'fork'
      />
      <Cards
      imgSrc = 'https://images.unsplash.com/photo-1717496001989-0a0f32386d12?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
      title ='car'
      descreption = 'an old car with the sky'
      li1 = 'eightys car'
      li2 = 'sky'
      li3 = 'white'
      />
      <Cards
      imgSrc = 'https://images.unsplash.com/photo-1717500250844-6ae3d2b1ec7c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'
      title ='fitnees'
      descreption = 'working out girl'
      li1 = 'dark cloth'
      li2 = 'workingout tools'
      li3 = 'a gitl'
      />
      <Cards
      imgSrc = 'https://images.unsplash.com/photo-1717457779569-a22db519853a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D'
      title ='gift'
      descreption = 'cople prapering a gift'
      li1 = 'bag'
      li2 = 'a women'
      li3 = 'a man'
      />
      <Cards
      imgSrc = 'https://plus.unsplash.com/premium_photo-1689596509450-07c90fb6bd40?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D'
      title ='frite'
      descreption = 'frite salad on a white palte'
      li1 = 'gribe'
      li2 = 'apple'
      li3 = 'banana'
      />
      </div>
      <Footer/>
    </>
  )
}

export default App
