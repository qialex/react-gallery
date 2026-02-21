import { MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { PAGINATION_LIMIT_ITEMS, PaginationChangeType } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { selectPagination, setPagination } from "../../slices/imagesGridSlice";

export default function LimitSelect () {
  const dispatch = useAppDispatch();
  // pagination
  const pagination = useAppSelector(selectPagination);

  const handleChange = (e: SelectChangeEvent<number>) => {
    dispatch(setPagination({pageChangeType: PaginationChangeType.changeLimit, limit: Number(e.target.value)}));
  }

  const items = [...PAGINATION_LIMIT_ITEMS]
  if (!items.includes(pagination.limit)) {
    items.push(pagination.limit)
    items.sort((a, b) => a > b ? 1 : -1)
  }

  return (
    <Stack>
      <Select
        size="small"
        sx={{width: '74px'}}
        value={pagination.limit}
        onChange={handleChange}
      >
        {items.map((n: number) => 
          <MenuItem value={n} key={n}>{n}</MenuItem>
        )}
      </Select>
    </Stack>
  );
}
