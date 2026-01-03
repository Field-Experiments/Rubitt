import {Component} from 'react'
import './App.css'
import Options from './Components/NavbarOptions'
 import MoneyManager from './Components/MoneyManager'
class App extends Component {
  state = {isOptionsVisible: false}

  toggleOptions = () => {
    this.setState(prevState => ({
      isOptionsVisible: !prevState.isOptionsVisible,
    }))
  }

  render() {
    const {isOptionsVisible} = this.state

    return (
      <div className="bg-container">
        <div>
          <header>
          <nav className="navbar">
            <div className="vertical-icons">
              <div className="container" onClick={this.toggleOptions}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dy05m6a1p/image/upload/v1767338265/WhatsApp_Image_2026-01-02_at_12.41.59_vhrtqd.jpg"
              className="rubit-icon"
              alt="logo"
            />
          </nav>
          </header>
          </div>
          <div className='card-container'>
              {isOptionsVisible ?(<div className='options-container'>
                 <Options  />
              </div>):null}
              <div className="money-manager-container">
                <MoneyManager />
              </div>
          </div>

      </div>
    )
  }
}

export default App
