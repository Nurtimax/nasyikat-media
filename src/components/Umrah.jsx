import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import ajylyk from '../assetts/icons/hadj.webp';

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
      </Box>
    </Container>
  );
};

export default HajjAndUmrahSection;
