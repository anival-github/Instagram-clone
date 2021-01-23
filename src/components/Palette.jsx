import { Component } from "react";
import ErrorMessage from "./Error";
import Network from '../services/network'
export default class Palette extends Component {
  InstaService = new Network();

  state = {
    error: false,
    photos: [],
    loading: true,
  };

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getUserPhotos("Scott")
      .then(this.onPhotosLoaded)
      .catch(this.onError);
  }

  onError = (error) => {
    console.log(error.message);
    this.setState({
      error: true,
    });
  };

  onPhotosLoaded = (photos) => {
    this.setState({
      error: false,
      photos,
      loading: false,
    });
  };

  renderItems(arr) {
    return arr.map((item) => {
      const { src, alt, timestamp } = item;
      return <img src={src} alt={alt} key={timestamp}></img>;
    });
  }

  render() {
    const { error, photos, loading } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    if (loading) {
      return (
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }

    const items = this.renderItems(photos);

    return <div className="palette">{items}</div>;
  }
}
