import * as FileSystem from 'expo-file-system';
import mime from 'react-native-mime-types';

const encodeImage = async (image) => {
    try {
      const fileExtension = image.uri.split('.').pop();
      const mimeType = mime.lookup(fileExtension) || 'image/png';

      // Read the image file as base64
      const base64Image = await FileSystem.readAsStringAsync(image.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const base64WithMimeType = `data:${mimeType};base64,${base64Image}`;

      console.log('Base64-encoded image:', base64WithMimeType);
      return base64WithMimeType;
    } catch (error) {
      console.error('Error encoding image to base64:', error);
    }
  };

  export default encodeImage;