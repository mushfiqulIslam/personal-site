// react
import * as React from 'react';
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
} from '@mui/material';
// custom component
import ContainerGrid from 'components/common/ContainerGrid';
import SkillProgress from 'components/common/SkillProgress';
// custom icons
import PythonIcon from 'components/icon/Python';
import JavaIcon from 'components/icon/Java';
import GoLangIcon from 'components/icon/GoLang';
// context
import ComponentsContext from 'context/componentsContext';
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: '5rem',
  marginTop: '5rem',
  scrollMarginTop: '2rem',
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: (
        <PythonIcon bgColor="white" fontSize="large" />
      ),
      title: 'Python',
      progressValue: 85,
    },
    {
      Icon: (
        <JavaIcon bgColor="white" fontSize="large" />
      ),
      title: 'Java',
      progressValue: 75,
    },
    {
      Icon: (
        <GoLangIcon bgColor="white" fontSize="large" />
      ),
      title: 'GoLang',
      progressValue: 60,
    },
  ];

  return (
    <>
      <CustomContainer id="skills" maxWidth={containerMaxWidth}>
        <Typography component="h2" variant="h4" textAlign="center">
          My Skills
        </Typography>
        <ContainerGrid marginTop="2rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              <SkillProgress
                size={100}
                value={skill.progressValue}
                Icon={skill.Icon}
                subtitle={`${skill.title} | ${skill.progressValue}%`}
              />
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
    </>
  );
};

export default Skills;
