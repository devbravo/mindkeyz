import Card from './Card';
import { useState } from 'react';

const LicenseSection = () => {
  const [basic] = useState([
    'Untagged mp3 file',
    'Instant download',
    'No Sales',
    'No Streams',
    'Video views 5k',
    'No radio / tv airplay',
    'No ownership of the beat',
  ]);
  const [premium] = useState([
    'Untagged mp3 / wav files',
    'Instant download',
    'Sales up to 10K',
    'Streams up to 100k',
    'Video views up to 100k',
    'Radio / tv airplay',
    'No ownership of the beat',
  ]);
  const [ultimate] = useState([
    'Untagged mp3 / wav / trackout files',
    'Instant download',
    'Unlimited sales',
    'Unlimited Streams',
    'Unlimited Video views',
    'Radio / tv airplay',
    'No ownership of the beat',
  ]);
  const [exclusive] = useState([
    'Untagged mp3 / Wav / trackout files ',
    'Instant download',
    'Unlimited sales',
    'Unlimited Streams',
    'Unlimited video views',
    'Radio / tv airplay',
    'Full ownership',
  ]);

  return (
    <div className='license-section'>
      <div className='license-section__text'>
        <h3 className='license-section__h3'>Licensing Info</h3>
        <p className='license-section__p'>
          Take time to read the licensing info before making a purchase
        </p>
      </div>
      <div className='license-section__card'>
        <Card
          name='basic license'
          price='$30'
          deal='Buy 2 get 1 free'
          licenses={basic}
        />
        <Card
          name='premium license'
          price='$50'
          deal='Buy 2 get 1 free'
          licenses={premium}
        />
        <Card
          name='ultimate license'
          price='$150'
          deal='Buy 2 get 1 free'
          licenses={ultimate}
        />
        <Card
          name='exclusive rights'
          price='$500+'
          deal={'---'}
          licenses={exclusive}
        />
      </div>
    </div>
  );
};

export default LicenseSection;
