export default function UnsplashLogo (props: {width: number, height: number}) {
  return (
    <img
        src={`${import.meta.env.BASE_URL}unsplash_logo.png`}
        width={props.width}
        height={props.height}
        alt='unsplash logo'
      />
  );
}
