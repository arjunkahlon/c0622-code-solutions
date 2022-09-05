import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      intervalID: null,
      currentIndex: 0
    });

    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  nextImage() {
    if (this.state.currentIndex === this.props.images.length - 1) {
      this.setState({
        currentIndex: 0
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  }

  previousImage() {
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: this.props.images.length - 1
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  }

  handleClick(event, number) {
    clearInterval(this.intervalID);
    if (event.target.classList.contains('fa-angle-left')) {
      this.previousImage();
    } else if (event.target.classList.contains('fa-angle-right')) {
      this.nextImage();
    } else if (event.target.classList.contains('fa-circle')) {
      this.setState({
        currentIndex: parseInt(number) - 1
      });
    }
    this.intervalID = setInterval(this.nextImage, 3000);
  }

  componentDidMount() {
    this.intervalID = setInterval(this.nextImage, 3000);
  }

  render() {
    const images = this.props.images;
    const imageElements = images.map(image => {
      return <img key={image.number} src={`../src/images/${image.imgURL}`}></img>;
    });
    const imageCircles = images.map(image => {
      if (parseInt(image.number - 1) === this.state.currentIndex) {
        return <i onClick={event => this.handleClick(event, image.number)} key={image.number} className='fas fa-circle'></i>;
      } else {
        return <i onClick={event => this.handleClick(event, image.number)} key={image.number} className='far fa-circle'></i>;
      }
    });

    return (
      <div className='container'>
        <div className='row center carousel'>
          <div className='column-full'>
            <div className='row center'>
              <div className='column-20 arrow-wrapper'>
                <i onClick={event => this.handleClick(event)} className='fas fa-angle-left carousel-arrow' id='left-arrow'></i>
              </div>
              <div className='column-60' id='img-carousel'>
                <div className='image-wrapper'>
                  {imageElements[this.state.currentIndex]}
                </div>
              </div>
              <div className='column-20 arrow-wrapper align-right'>
                <i onClick={event => this.handleClick(event)} className='fas fa-angle-right carousel-arrow' id='right-arrow'></i>
              </div>
            </div>
            <div className='row center'>
              <div className='column-full' id='indication-carousel'>
                {imageCircles}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
