'use client';

import { StyledComponent } from '@emotion/styled';
import { Rating, RatingProps, styled } from '@mui/material';

export const StyledRating: StyledComponent<RatingProps> = styled(Rating)({
  '&.MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});
