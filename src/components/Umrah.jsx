import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import umrah from '../assetts/icons/umrah.webp';
import ajylyk from '../assetts/icons/hadj.webp';
import airplaneIcon from '../assetts/icons/airplaneIcon.svg';
import hotelIcon from '../assetts/icons/hotelIcon.svg';
import foodIcon from '../assetts/icons/foodIcon.svg';
import trainIcon from '../assetts/icons/trainIcon.webp';
import ServiceCard from './ServiceCard';

import { Instagram, Phone, WhatsApp } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {},
}));

const SectionImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
  objectFit: 'cover',
  color: '#212b36',
}));

const CompanyBanner = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, #0c0c0c, #42a5f5)',
  padding: theme.spacing(6),
  textAlign: 'center',
  borderRadius: '12px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
  },
}));

const StyledIconButton = styled(IconButton)(({ theme, color }) => ({
  color: color || theme.palette.text.primary,
}));

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const HajjAndUmrahSection = () => {
  return (
    <Container>
      <Box>
        {/* Hajj Section */}
        <SectionContainer>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInVariants}>
              <Typography variant="h4" gutterBottom color="#212b36">
                Ажылык
              </Typography>
            </motion.div>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInVariants}>
                  <Typography variant="body1" color="#212b36">
                    Ажылык деген эмне? Ажылыктын сөздүк мааниси – улуу нерсеге
                    карай аттануу. Шарият боюнча ажылык бул – Кааба жана анын
                    айланасындагы куттуу деп эсептелген белгилүү жерлерге
                    белгиленген учурда барып, усул-эрежелерине ылайык зарыл
                    ибадаттарды аткаруу болуп эсептелет.
                  </Typography>
                  <Typography variant="body2" gutterBottom color="#212b36">
                    Аллах Таала өз пенделерине эгер мүмкүнчүлүгү болсо, өмүрүндө
                    бир жолу хаж ибаадатын парз кылды. Хаж- бул Аллах Субхану уа
                    Тааланын үйү болгон ыйык Каабаны, эң биринчи мусулманчылык
                    башталган, Кураан аяттары түшкөн жерди, Пайгамбарыбыз
                    (салаллоху алейхи уа салламдын) баскан жерлерин, анын
                    мечитин, сахабалар мекендеген жерди зыярат кылуу. Ар кандай
                    нерсени угуп койгон башка, бирок көз менен көргөн башка
                    таасир берет. Ошол сыңары, Ыйык Кураандын мекенин,
                    Пайгамбарыбыз (салаллоху алейхи уа саллам) үммөтү үчүн азап
                    чексе да, сабыр кылуу менен туура жолду баштап, басып өткөн
                    жерлерди зыярат кылуу менен, пенденин Аллах Таалага,
                    Пайгамбарыбыз (салаллоху алейхи уа салламга) болгон сүйүүсү,
                    арзуусу жогорулап, ыйманы ого бетер бекемделет ин шаа Аллах.
                    Ошону менен катар Хажда кылынган ибаадаттардын сооптору,
                    башка мезгилде кылынган ибадаттардын сообунан бир канча эсе
                    көп болот. Жогоруда айтылган беш парздын эч биринде пенде
                    үчүн кыйынчылык жаратылган эмес, тескерисинче, ар биринде
                    Жараткандын нематы, пендесине болгон камкордугу,
                    берешендиги, чексиз жакшылыктары, эки дүйнөнүн бактылуугу
                    камтылган.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInVariants}>
                  <SectionImage src={ajylyk} alt="Hajj Image" />
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </SectionContainer>

        {/* Umrah Section */}
        <SectionContainer>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInVariants}>
              <Typography variant="h4" gutterBottom color="#212b36">
                Умра
              </Typography>
            </motion.div>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInVariants}>
                  <SectionImage src={umrah} alt="Umrah Image" />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInVariants}>
                  <Typography variant="body1" color="#212b36">
                    1.Умра деген эмне? <br /> 2. Кичи ажылыкты кайсы учурда
                    кылса болот?
                    <br /> 3. Кандай шарттар аткарылат? <br /> Умра деген создун
                    мааниси - зыярат кылуу дегенди тушундурот.
                  </Typography>
                  <Typography variant="body1" color="#212b36">
                    Умра жылдын кайсы бир мезгилинде ихрамга кирип Каабаны таваф
                    кылуу, Сафа жана Марва дөңсөөөнөрүнүн, ортосунда ылдам
                    басуудан сон чач алдырып, ихрамдан чыгуу менен орундалган
                    ибадат. Умранын эки парзы бар: Ихрамга кируу жана Каабаны
                    айлануу.
                  </Typography>
                  <Typography variant="body1" gutterBottom color="#212b36">
                    Мусулман баласы учун өмүрүндө бир жолу умра кылуу суннөт
                    болуп эсептелет. блдам басуу, жуунуп-тарануу, чач,
                    сакал-мурутту алуу умранын важиптери. Парз-важиптер ажылык
                    ибадатындагы таризде орундалат. Ислам дининде умра ибадатын
                    орундоо учун атайын белгилуу убакыт көрсөтүлгөн эмес. Аны
                    жылдын ар кайсы мезгилинде аткарса болот. Ошону менен катар
                    арапа күнүнөн баштап курман айт майрамынын төртүнчү куну кун
                    батканга чейин умра кылуу тахриман макирөө иш катары
                    каралат. Себеби бул күндөр ажылык ибадаты белгиленген күндөр
                    болуп эсептелет.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </SectionContainer>

        <SectionContainer style={{ marginTop: '1rem' }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CompanyBanner>
              <motion.div variants={fadeInVariants}>
                <Typography variant="h4" gutterBottom>
                  Amanat Umra
                </Typography>
              </motion.div>
              <motion.div variants={fadeInVariants}>
                <Typography variant="body1" gutterBottom>
                  Руханий сапарга биз менен бирге чыгыңыз! <br />
                  Тажрыйбалуу УМРА башчылар <br />
                  Кемчиликсиз ибадат
                </Typography>
              </motion.div>
              <motion.div variants={fadeInVariants}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px',
                  }}
                >
                  <StyledIconButton
                    href="https://www.instagram.com/amanat.umra_/"
                    target="_blank"
                    rel="noopener"
                    color="#E4405F" // Instagram color
                  >
                    <Instagram />
                  </StyledIconButton>
                  <StyledIconButton
                    href="tel:+"
                    target="_blank"
                    rel="noopener"
                    color="#34b7f1" // Phone color
                  >
                    <Phone />
                  </StyledIconButton>
                </div>
              </motion.div>
              <SocialMediaIcons>
                <WhatsAppButton
                  variant="contained"
                  startIcon={<WhatsApp />}
                  href="https://wa.me/+?text=Hello%20Amanat%20Umra,%20I%20would%20like%20more%20information%20about%20your%20Umrah%20packages."
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp
                </WhatsAppButton>
              </SocialMediaIcons>
            </CompanyBanner>
          </motion.div>
        </SectionContainer>

        {/* Services Section */}
        <SectionContainer>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInVariants}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ marginTop: '1rem', marginBottom: '1rem' }}
              >
                Биздин кызматтар
              </Typography>
            </motion.div>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <ServiceCard
                  title="Авиабилеттер"
                  icon={airplaneIcon} // Pass the path to the PNG or SVG icon
                  description="Умра ибадатына арзан комфорт учактар менен"
                  iconSize="10rem"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ServiceCard
                  title="Мейманкана"
                  icon={hotelIcon} // Pass the path to the PNG or SVG icon
                  description="Мекке мединага жакын Эконом 3 4 жылдыздуу комфорт 4 5 жылдыздуу мейманканалар"
                  iconSize="10rem"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ServiceCard
                  title="2 мааал тамак аш"
                  icon={foodIcon} // Pass the path to the PNG or SVG icon
                  description="2 маал ыссык тамак аш"
                  iconSize="10rem"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ServiceCard
                  title="Поезд Мекке - Медина"
                  icon={trainIcon} // Pass the path to the PNG or SVG icon
                  description="Мединадан меккеге эконом автобустар комфорт поездер менен"
                  iconSize="10rem"
                />
              </Grid>
            </Grid>
          </motion.div>
        </SectionContainer>
      </Box>
    </Container>
  );
};

export default HajjAndUmrahSection;

const SocialMediaIcons = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
}));

const WhatsAppButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#25D366', // WhatsApp green color
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1EBEA5',
  },
}));
