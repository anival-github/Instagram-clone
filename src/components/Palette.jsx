/* eslint-disable class-methods-use-this */
import {
  React,
  Component,
  // useState,
  // useEffect,
} from 'react';
import ErrorMessage from './Error';
import Network from '../services/network';

// export default function Palette() {
//   const [userPhotos, setUserPhotos] = useState({
//     photos: [],
//     error: false,
//     loading: true,
//   });

//   const onError = (error) => {
//     console.log(error.message);
//     setUserPhotos({
//       error: true,
//     });
//   };

//   const onPhotosLoaded = (photos) => {
//     setUserPhotos({
//       error: false,
//       photos,
//       loading: false,
//     });
//   };

//   // componentDidMount() {
//   //   this.updatePhotos();
//   // }

//   // const updatePhotos = () => {
//   //   InstaService.getUserPhotos('Scott')
//   //     .then(onPhotosLoaded)
//   //     .catch(onError);
//   // };

//   useEffect(() => {
//     const InstaService = new Network();

//     InstaService.getUserPhotos('Scott')
//       .then(onPhotosLoaded)
//       .catch(onError);
//   }, []);

//   const renderItems = (arr) => arr.map((item) => {
//     const { src, alt, timestamp } = item;
//     return <img src={src} alt={alt} key={timestamp} />;
//   });

//   const { error, photos, loading } = userPhotos;

//   if (error) {
//     return <ErrorMessage />;
//   }

//   if (loading) {
//     return (
//       <div className="lds-facebook">
//         <div />
//         <div />
//         <div />
//       </div>
//     );
//   }

//   const items = renderItems(photos);

//   return <div className="palette">{items}</div>;
// }

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.InstaService = new Network();
    this.state = {
      error: false,
      photos: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getUserPhotos('Scott')
      .then(this.onPhotosLoaded)
      .catch(this.onError);
  }

  onPhotosLoaded = (photos) => {
    this.setState({
      error: false,
      photos,
      loading: false,
    });
  }

  onError = (error) => {
    console.log(error.message);
    this.setState({
      error: true,
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { src, alt, timestamp } = item;
      return <img src={src} alt={alt} key={timestamp} />;
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
          <div />
          <div />
          <div />
        </div>
      );
    }

    const items = this.renderItems(photos);

    return <div className="palette">{items}</div>;
  }
}
