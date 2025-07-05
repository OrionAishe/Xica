import Title from "@/components/atoms/Title/Title";
import styles from "./page.module.scss"

export default function Sobre() {

  return (
    <div className={styles.Sobre}>
      <Title>Coletiva Intertransvestigênere Xica Manicongo</Title>
      <img src="/XICA.png" alt="" width={220} />
      <p>A Coletiva Intertransvestigênere Xica Manicongo é uma coletiva auto-organizada que pauta e discute as vivências trans, travestis, não-binárias e intersexo nos espaços da Universidade de São Paulo sobre uma perspectiva antirracista, anticapitalista e anticolonialista. Somos um coletivo político que acolhe ês estudantes trans e intersexo da USP e es organiza para a articulação de ações que ocasionem mudanças concretas na USP e no país.</p>
      <p>A coletiva atua de formas diversas dentro da USP. Ela promove eventos sobre as pautas trans na universidade e na sociedade, conscientizando ês estudantes participa das atividades do movimento estudantil, estando presente em atos e assembleias, e luta contra os casos de transfobia na universidade, além de ser um meio de acolhimento a ês estudantes trans. Durante a greve da USP de 2023,  a Xica foi linha de frente ao defender a implementação das cotas trans na universidade e, desde então, vem construindo essa luta como um de seus principais focos.</p>
    </div>);
}
