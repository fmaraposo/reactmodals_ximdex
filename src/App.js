import React from 'react';
import './App.css';
import myData from './myData.json';
import DropdownMenu from './components/Dropdown/Dropdown';
import { Button } from 'react-bootstrap';
import ModalShow from './components/Modal/ModalShow';

class App extends React.Component {
  state = {
    isModalOpen: false,
    data: [],
  };

  showModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  hideModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  componentDidMount () {
    this.setState({
      data:myData
    })
    console.log('El Componente se ha montado')
  }

  render() {
    return (
      <div className="App">
        <div className="HomeTitle">
          <h1>
            <span>React Modals Challenge</span>
          </h1>
        </div>
        <DropdownMenu data={this.state.data} />
        <Button
          className="ModalButton"
          variant="primary"
          onClick={this.showModal}
        >
          Show Modal
        </Button>
        <ModalShow
          data={this.state.data}
          isModalOpen={this.state.isModalOpen}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

export default App;
