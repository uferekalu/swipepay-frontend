import Image from 'next/image';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Image
        src="/assets/images/loader.svg"
        width={20}
        height={20}
        alt="loader"
      />
    </div>
  );
};

export default Loading;
