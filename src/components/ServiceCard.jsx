import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  styled,
} from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.shadows[8],
  },
}));

const IconWrapper = styled('div')(({ theme, size }) => ({
  width: size,
  height: size,
  margin: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ServiceCard = ({ title, icon: Icon, description, iconSize = '3rem' }) => {
  return (
    <StyledCard>
      <CardHeader
        title={
          <IconWrapper size={iconSize}>
            {typeof Icon === 'string' ? (
              <img
                src={Icon}
                alt={`${title} icon`}
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <Icon style={{ fontSize: '100%' }} />
            )}
          </IconWrapper>
        }
        titleTypographyProps={{ variant: 'h5' }}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ServiceCard;
