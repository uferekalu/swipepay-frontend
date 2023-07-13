import Image from 'next/image';

const Loading = (props) => {
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
        width={props.width ? props.width :  20}
        height={props.height ? props.height : 20}
        alt="loader"
      />
    </div>
  );
};

export default Loading;
