import LicenseCard from './LicenseCard';

const License = () => {
  const basic = [
    'Untagged mp3 file',
    'Instant download',
    'No Sales',
    'No Streams',
    'Video views 5k',
    'No radio / tv airplay',
    'No ownership of the beat',
  ];
  const premium = [
    'Untagged mp3 / wav files',
    'Instant download',
    'Sales up to 10K',
    'Streams up to 100k',
    'Video views up to 100k',
    'Radio / tv airplay',
    'No ownership of the beat',
  ];
  const ultimate = [
    'Untagged mp3 / wav / trackout files',
    'Instant download',
    'Unlimited sales',
    'Unlimited Streams',
    'Unlimited Video views',
    'Radio / tv airplay',
    'No ownership of the beat',
  ];
  const exclusive = [
    'Untagged mp3 / Wav / trackout files ',
    'Instant download',
    'Unlimited sales',
    'Unlimited Streams',
    'Unlimited video views',
    'Radio / tv airplay',
    'Full ownership',
  ];

  return (
    <div data-test='license-component' className='license-section'>
      <div className='license-section__text'>
        <h3 className='license-section__h3'>Licensing Info</h3>
        <p className='license-section__p'>
          Take time to read the licensing info before making a purchase
        </p>
      </div>
      <div className='license-section__card'>
        <LicenseCard
          licenseName='basic license'
          price='$30'
          deal='Buy 2 get 1 free'
          licenses={basic}
        />
        <LicenseCard
          licenseName='premium license'
          price='$50'
          deal='Buy 2 get 1 free'
          licenses={premium}
        />
        <LicenseCard
          licenseName='ultimate license'
          price='$150'
          deal='Buy 2 get 1 free'
          licenses={ultimate}
        />
        <LicenseCard
          licenseName='exclusive rights'
          price='$500+'
          deal={'---'}
          licenses={exclusive}
        />
      </div>
    </div>
  );
};

export default License;
