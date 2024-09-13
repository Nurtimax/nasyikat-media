import { capitalCase } from 'change-case';

// @mui
import { styled } from '@mui/material/styles';
import { Tab, Box, Card, Tabs, Container } from '@mui/material';

// hooks

import Iconify from '../components/Iconify';
import useSettings from '../hooks/useSettings';
import useTabs from '../hooks/useTabs';
import Profile from '../components/Profile';
import ProfileFollowers from '../components/ProfileFollowers';

import ProfileGallery from '../components/ProfileGallery';
import ProfileCover from '../components/ProfileCover';
import GalleryList from '../utils/constants/GaleryUstazs';
import { useParams } from 'react-router-dom';
import USER_LIST from '../utils/constants/aalymdar';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
// ----------------------------------------------------------------------

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  justifyContent: 'center', // Center tabs on all screen sizes by default
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center', // Ensure tabs are centered on mobile (small devices)
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center', // You can adjust this to 'flex-start' or 'flex-end' for larger screens if needed
  },
}));

// ----------------------------------------------------------------------

export default function AalymdarDetails() {
  const { themeStretch } = useSettings();
  const { id } = useParams();

  const { currentTab, onChangeTab } = useTabs('Профиль');

  const findUser = USER_LIST.find((user) => user.id === Number(id));

  if (!findUser) {
    return 'user not found';
  }

  const PROFILE_TABS = [
    {
      value: 'Профиль',
      icon: <Iconify icon={'eva:heart-fill'} width={20} height={20} />,
      component: <Profile myProfile={[]} posts={findUser.posts} />,
    },
    {
      value: 'Катталуучулар',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <ProfileFollowers followers={[]} />,
    },

    {
      value: 'Сүрөттөр',
      icon: <Iconify icon={'ic:round-perm-media'} width={20} height={20} />,
      component: <ProfileGallery gallery={GalleryList} />,
    },
  ];

  return (
    <>
      <Header />
      <Welcome />
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: 'relative',
          }}
        >
          <ProfileCover
            name={findUser.name}
            cover={findUser.cover}
            description={findUser.description}
          />

          <TabsWrapperStyle>
            <Tabs
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              value={currentTab}
              onChange={onChangeTab}
            >
              {PROFILE_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={capitalCase(tab.value)}
                />
              ))}
            </Tabs>
          </TabsWrapperStyle>
        </Card>

        {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
      <div style={{ marginTop: '1rem' }}>
        <Footer />
      </div>
    </>
  );
}
