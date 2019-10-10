import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD

    this.imageRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.imageRef);
  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
=======
    this.state = {
      spans: 0
    };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({
      spans: spans
    });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
>>>>>>> ee538312119aff9e6d99e3dfe25f998038a64155
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
