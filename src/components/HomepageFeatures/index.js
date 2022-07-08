import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Saúde Service",
    Svg: require("@site/static/img/logo-saude.svg").default,
    description: (
      <>
        Sistema completo de pagamentos com cartões,
        desenvolvido exclusivamente para profissionais da área da saúde,
         com soluções que facilitam também os processos
         administrativos nas clínicas ou consultórios
      </>
    ),
  },
  {
    title: "Evo",
    Svg: require("@site/static/img/logo-evo.svg").default,
    description: (
      <>
        Sistema de pagamento elaborado para atender à determinados
        segmentos do comercio oferecendo soluções personalizadas
        e atendimento diferenciado para os estabelecimentos cadastrados
      </>
    ),
  },
  {
    title: "Finpet",
    Svg: require("@site/static/img/logo-finpet.svg").default,
    description: (
      <>
        Sistema de pagamento ideal para o mundo pet
        com Ferramentas exclusivas para a área veterinária
        com split de Pagamento para seus prestadores de serviços e fornecedores
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}