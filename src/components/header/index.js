import React, { Component } from 'react'
import './index.css'
import './index.scss'
import Me from '../../assests/images/me.jpeg'

export default class Header extends Component {
    render() {
        return (
            <div className='bg'>
                {/* <div className='level-right p-2'>
                    <p className='level-item'> <a href='https://facebook.com/mandge/' class="icon ">
                        <i class="fa fa-lg fa-facebook"></i>
                    </a></p>
                    <p className='level-item'><a href='https://instagram.com/nikhil_mandge/' class="icon has-text-danger">
                        <i class="fa fa-lg fa-instagram"></i>
                    </a></p>
                    <p className='level-item'><a href='https://linkedin.com/in/nikhil-mandge-91450b112' class="icon has-text-info">
                        <i class="fa fa-lg fa-linkedin"></i>
                    </a></p>
                    <p className='level-item'><a href='www.gmail.com' class="icon has-text-dark">
                        <i class="fa fa-lg fa-google"></i>
                    </a></p>
                    <p className='level-item'></p>

                </div> */}
                <div className='has-text-centered'>
                    <img alt='' className='circular-img' src={Me} />
                    <div className='is-size-3'>
                        Nikhil Mandge
                        </div>
                         <a href='https://facebook.com/mandge/' class="icon ">
                        <i class="fa fa-lg fa-facebook"></i>
                    </a>
                    <a href='https://instagram.com/nikhil_mandge/' class="icon has-text-danger">
                        <i class="fa fa-lg fa-instagram"></i>
                    </a>
                    <a href='https://linkedin.com/in/nikhilmandge' class="icon has-text-info">
                        <i class="fa fa-lg fa-linkedin"></i>
                    </a>
                    <a href='www.gmail.com' class="icon has-text-dark">
                        <i class="fa fa-lg fa-google"></i>
                    </a>
                    <Typer
    heading="Tech Skills and Roles -"
    dataText={[  
      'Fullstack Engineer', 
      'Python Developer',
      'React Developer',
      'Java Developer',
      'Python Developer',
      'Android Developer',
      '.Net Developer',
      
    ]} 
  />
                </div>

            </div>
        )
    }
}


const TYPING_SPEED = 150;
const DELETING_SPEED = 30;

class Typer extends React.Component {

  state = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: TYPING_SPEED
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? DELETING_SPEED : TYPING_SPEED
    });

    if (!isDeleting && text === fullText) {     
      setTimeout(() => this.setState({ isDeleting: true }), 500);   
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });      
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <h1 className='is-size-4'>{ this.props.heading }&nbsp;
        <span>{ this.state.text }</span>
        <span id="cursor"></span>
      </h1>
    );
  }
}

