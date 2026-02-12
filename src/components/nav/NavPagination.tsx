import Grid from "@mui/material/Grid";
import { AppBar, Button, Container, IconButton, Toolbar } from "@mui/material";
import LimitSelect from "../pagination/LimitSelect";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { isFirstPageSelector, setPagination } from "../../slices/imagesGridSlice";
import { PaginationChangeType } from "../../constants";
import PageInput from "../pagination/PageInput";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function NavPagination () {
  const dispatch = useAppDispatch();

  // pagination
  const isFirstPage = useAppSelector(isFirstPageSelector);

  // handle chaning the items per page
  const handlePageClick = (type: PaginationChangeType) => {
    dispatch(setPagination({pageChangeType: type}));
  }

  return (
    <AppBar position="fixed" color="inherit" sx={{ top: 'auto', bottom: 0 }} >
      <Container maxWidth={'md'}>
        <Toolbar disableGutters sx={{minHeight: '68px', width: '100%'}}>
          <Grid container justifyContent="space-between" sx={{minHeight: '68px', paddingTop: '14px', width: '100%'}}>
            <Grid>
              <Button
                sx={{display: {xs: 'none', md: 'flex'}}}
                onClick={() => handlePageClick(PaginationChangeType.firstPage)}
                disabled={isFirstPage}
                startIcon={<KeyboardDoubleArrowLeftIcon />}
              >
                First Page
              </Button>
              <IconButton 
                onClick={() => handlePageClick(PaginationChangeType.firstPage)}
                color="primary"
                aria-label="First Page"
                sx={{display: {xs: 'block', md: 'none'}}}
              >
                <KeyboardDoubleArrowLeftIcon />
              </IconButton>
            </Grid>
            <Grid>
              <Button
                sx={{display: {xs: 'none', md: 'flex'}}}
                onClick={() => handlePageClick(PaginationChangeType.previousPage)}
                disabled={isFirstPage}
                startIcon={<KeyboardArrowLeftIcon />}
              >
                Previous Page
              </Button>
              <IconButton 
                onClick={() => handlePageClick(PaginationChangeType.previousPage)}
                color="primary"
                aria-label="Previous Page"
                sx={{display: {xs: 'block', md: 'none'}}}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
            </Grid>
            <Grid>
              <PageInput />
            </Grid>
            <Grid>
              <Button
                sx={{display: {xs: 'none', md: 'flex'}}}
                onClick={() => handlePageClick(PaginationChangeType.nextPage)}
                endIcon={<KeyboardArrowRightIcon />}
              >
                Next Page
              </Button>
              <IconButton 
                onClick={() => handlePageClick(PaginationChangeType.nextPage)}
                color="primary"
                aria-label="Next Page"
                sx={{display: {xs: 'block', md: 'none'}}}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            </Grid>
            <Grid>
              <LimitSelect />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
