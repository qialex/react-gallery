import { useEffect, useMemo, useRef, useState } from "react";
import { Stack } from "@mui/material";
import { CircularProgress } from '@mui/material';
import { useOnScreen } from "../../hooks/onSecreen";
import { useAppSelector } from "../../hooks/reduxHooks";
import { getItemById, makeSelectImageUrlForCanvas } from "../../slices/imageSlice";

export function ImagesCanvas (props: {id: number, showEdited?: boolean, width?: string|number, height?: string|number}) {
  const { id, showEdited, width, height } = props;
  const getItemByIdMemo = useMemo(() => getItemById(id), [id])
  const image = useAppSelector(getItemByIdMemo)

  const selectImageUrl = useMemo(() => makeSelectImageUrlForCanvas(id, !!showEdited), [id, showEdited])
  const imgUrl = useAppSelector(selectImageUrl)

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null);
  const isVisibleNow = useOnScreen(ref);

  const imageRef = useRef<HTMLImageElement>(null);

  // For showEdited mode, always show immediately. For gallery, use lazy loading
  const shouldLoad = showEdited || isVisibleNow;

  useEffect(() => {
    if (imageRef?.current && imageRef?.current?.src !== imgUrl) {
      setIsLoaded(false)
    }
  }, [imgUrl])

  const onloadImage = () => {
    console.log("onloadImage", id)
    setIsLoaded(true)
  }

  const isImageVisible = shouldLoad && isLoaded;

  return (
    <Stack ref={ref}>
      {shouldLoad && imgUrl && imgUrl.length > 0 && (
        <img
          ref={imageRef}
          width={width}
          height={height}
          src={imgUrl}
          onLoad={onloadImage}
          alt={image?.author || ''}
          style={{lineHeight: 0, display: isImageVisible ? 'block' : 'none', width, height}}
        />
      )}
      <Stack
        sx={{display: isImageVisible ? 'none' : 'flex', height, width, }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <CircularProgress />
      </Stack>
    </Stack>
  )
}